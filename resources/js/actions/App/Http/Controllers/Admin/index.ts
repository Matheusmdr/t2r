import ProductController from './ProductController'
import ServiceController from './ServiceController'
import PostController from './PostController'
import ProductCategoryController from './ProductCategoryController'
import BannerController from './BannerController'
import SiteSettingController from './SiteSettingController'
import DepartmentController from './DepartmentController'
const Admin = {
    ProductController: Object.assign(ProductController, ProductController),
ServiceController: Object.assign(ServiceController, ServiceController),
PostController: Object.assign(PostController, PostController),
ProductCategoryController: Object.assign(ProductCategoryController, ProductCategoryController),
BannerController: Object.assign(BannerController, BannerController),
SiteSettingController: Object.assign(SiteSettingController, SiteSettingController),
DepartmentController: Object.assign(DepartmentController, DepartmentController),
}

export default Admin