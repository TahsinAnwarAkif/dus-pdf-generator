import asyncHandler from 'express-async-handler';

// @ desc   Get Metadata Before Generating PDF
// @ route  GET /api/v1/dus/generatePdf/metadata
// @ access Private
export const getMetadata = asyncHandler(async (req, res, next) => {  
  res.status(200)
    .json({
      success: true
  })
  .end();
});

// @ desc   Generate PDF
// @ route  POST /api/v1/dus/generatePdf
// @ access Private
export const generatePdf = asyncHandler(async (req, res) => {  
  res.status(200)
    .json({
      success: true,
  })
  .end();
});
