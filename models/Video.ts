import mongoose, { model, models, Schema } from "mongoose";

export const VIDEO_DIMENSTIONS = {
  width: 1000,
  height: 1920,
} as const;

export interface TVideo {
  title: string;
  description: string;
  videoURL: string;
  thumbnailURL: string;
  controls?: boolean;
  _id?: mongoose.Types.ObjectId;
  transformation?: {
    height: number;
    width: number;
    quality?: number;
  };
}
const videoSchema = new Schema<TVideo>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  videoURL: { type: String, required: true },
  thumbnailURL: { type: String, required: true },
  controls: { type: Boolean, default: true },
  transformation: {
    height: {
      type: Number,
      default: VIDEO_DIMENSTIONS.height,
    },
    width: {
      type: String,
      default: VIDEO_DIMENSTIONS.width,
    },
    quality: {
      type: Number,
      min: 1,
      max: 100,
    },
  },
});
const Video = models?.Video|| model<TVideo>("User", videoSchema);
export default Video;
