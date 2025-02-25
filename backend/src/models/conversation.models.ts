import mongoose, { Schema } from 'mongoose';
import { IMediaSchema } from '../types/media.types';
import { IConversationShema } from '../types/conversation.types';

interface ConversationDocument extends IConversationShema, Document {}

const conversationSchema = new Schema<ConversationDocument>(
  {
    participants: [
      { type: Schema.Types.ObjectId, ref: 'user', required: true },
    ],
    lastMessage: { type: Schema.Types.ObjectId, ref: 'message', default: {} },
    unreadCount: { type: Map, of: Number, default: {} },
  },
  {
    timestamps: true,
    toJSON: {
      transform: function (doc, ret) {
        delete ret.__v;
      },
    },
    toObject: {
      transform: function (doc, ret) {
        delete ret.__v;
      },
    },
  },
);

const Media = mongoose.model<ConversationDocument>(
  'conversation',
  conversationSchema,
);

export default Media;
