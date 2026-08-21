export const featureFlags = {
  cameraCoach: process.env.FEATURE_CAMERA_COACH !== "false",
  videoAnalyzer: process.env.FEATURE_VIDEO_ANALYZER !== "false",
  datingMode: true,
  creatorMode: process.env.FEATURE_CREATOR_MODE !== "false",
  studioMode: false,
  apiAccess: false,
  faceBlurTool: true,
} as const;
