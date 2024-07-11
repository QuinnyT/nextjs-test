
import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IChatMessage extends Document {
  sender: string;
  text: string;
  timestamp: Date;
}

const ChatMessageSchema: Schema = new Schema({
  sender: { type: String, required: true },
  text: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

const ChatMessage: Model<IChatMessage> = mongoose.models.ChatMessage || mongoose.model<IChatMessage>('ChatMessage', ChatMessageSchema);

export default ChatMessage;
