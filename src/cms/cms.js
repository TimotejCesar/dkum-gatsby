import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import ContentPagePreview from './preview-templates/ContentPagePreview'

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewStyle('./preview-styles/preview-style.css');
CMS.registerPreviewTemplate('content-page', ContentPagePreview)
