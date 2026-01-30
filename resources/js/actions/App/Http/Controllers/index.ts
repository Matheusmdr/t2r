import HomeController from './HomeController'
import ContactController from './ContactController'
import Admin from './Admin'
import Settings from './Settings'
const Controllers = {
    HomeController: Object.assign(HomeController, HomeController),
ContactController: Object.assign(ContactController, ContactController),
Admin: Object.assign(Admin, Admin),
Settings: Object.assign(Settings, Settings),
}

export default Controllers