import mongoose from '../config/DBHelper'

const Schema = mongoose.Schema

const CommentsSchema = new Schema({
  cid: { type: String, ref: 'comments' },
  commentAuth: { type: String, ref: 'users' }, // 被点赞用户的id
  uid: { type: String, ref: 'users' }
}, { timestamps: { createdAt: 'created', updatedAt: 'updated' } })

CommentsSchema.post('save', function (error, doc, next) {
  if (error.name === 'MongoError' && error.code === 11000) {
    next(new Error('There was a duplicate key error'))
  } else {
    next(error)
  }
})

CommentsSchema.statics = {
  findByCid: function (id) {
    return this.find({ cid: id })
  },
  getHandsByUid: function (id, page, limit) {
    return this.find({ uid: id })
      .populate({
        path: 'uid',
        select: '_id name'
      })
      .populate({
        path: 'cid',
        select: '_id content'
      })
      .skip(page * limit)
      .limit(limit)
      .sort({ created: -1 })
  },
  // 取得其他用户对我的最新点赞
  getHandUsersOnMe: function (uid, skip, limit) {
    return this.find({ commentAuth: uid })
      .sort({ created: -1 })
      .skip(skip)
      .limit(limit)
      .populate({ path: 'uid', select: 'name pic' })
  },
  deleteByCommentId: function (cid) {
    return this.deleteMany({ cid })
  }
}

const CommentsHands = mongoose.model('comments_hands', CommentsSchema)

export default CommentsHands