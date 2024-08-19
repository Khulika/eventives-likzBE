/* eslint-disable */
export default async () => {
    const t = {};
    return { "@nestjs/swagger": { "models": [[import("./event-management/event-categories/dto/create-event-category.dto"), { "CreateEventCategoryDto": { categoryName: { required: true, type: () => String }, status: { required: true, type: () => String } } }], [import("./event-management/event-categories/dto/edit-event-category.dto"), { "EditEventCategoryDto": { categoryName: { required: false, type: () => String }, status: { required: false, type: () => String } } }], [import("./user-management/roles/dto/create-role.dto"), { "CreateRoleDto": { roleName: { required: true, type: () => String }, description: { required: true, type: () => String } } }], [import("./user-management/roles/dto/update-role.dto"), { "UpdateRoleDto": {} }], [import("./user-management/users/dto/create-user.dto"), { "CreateUserDto": { userName: { required: true, type: () => String }, email: { required: true, type: () => String }, status: { required: true, type: () => String }, roleId: { required: true, type: () => Number } } }], [import("./user-management/users/dto/update-user.dto"), { "UpdateUserDto": {} }]], "controllers": [[import("./app.controller"), { "AppController": { "getHello": { type: String } } }], [import("./event-management/event-categories/event-categories.controller"), { "EventCategoriesController": { "createEventCategory": {}, "getEventCategories": {}, "editEventCategoryById": {}, "deleteEventCategoryById": {} } }], [import("./user-management/roles/roles.controller"), { "RolesController": { "createRole": {}, "getRoles": {}, "getRoleById": {}, "editRoleById": {}, "deleteRoleById": {} } }], [import("./user-management/users/users.controller"), { "UsersController": { "createUser": {}, "getUsers": {}, "getUserById": {}, "editUserById": {}, "deleteUserById": {} } }]] } };
};