import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import ContentPagePreview from './preview-templates/ContentPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewStyle('./preview-styles/preview-style.css');
CMS.registerPreviewTemplate('content-page', ContentPagePreview);
CMS.registerPreviewTemplate('index-page', IndexPagePreview)
