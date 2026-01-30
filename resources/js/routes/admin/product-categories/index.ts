import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\ProductCategoryController::index
 * @see app/Http/Controllers/Admin/ProductCategoryController.php:16
 * @route '/admin/product-categories'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/product-categories',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ProductCategoryController::index
 * @see app/Http/Controllers/Admin/ProductCategoryController.php:16
 * @route '/admin/product-categories'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ProductCategoryController::index
 * @see app/Http/Controllers/Admin/ProductCategoryController.php:16
 * @route '/admin/product-categories'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\ProductCategoryController::index
 * @see app/Http/Controllers/Admin/ProductCategoryController.php:16
 * @route '/admin/product-categories'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\ProductCategoryController::index
 * @see app/Http/Controllers/Admin/ProductCategoryController.php:16
 * @route '/admin/product-categories'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\ProductCategoryController::index
 * @see app/Http/Controllers/Admin/ProductCategoryController.php:16
 * @route '/admin/product-categories'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\ProductCategoryController::index
 * @see app/Http/Controllers/Admin/ProductCategoryController.php:16
 * @route '/admin/product-categories'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \App\Http\Controllers\Admin\ProductCategoryController::create
 * @see app/Http/Controllers/Admin/ProductCategoryController.php:28
 * @route '/admin/product-categories/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/product-categories/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ProductCategoryController::create
 * @see app/Http/Controllers/Admin/ProductCategoryController.php:28
 * @route '/admin/product-categories/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ProductCategoryController::create
 * @see app/Http/Controllers/Admin/ProductCategoryController.php:28
 * @route '/admin/product-categories/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\ProductCategoryController::create
 * @see app/Http/Controllers/Admin/ProductCategoryController.php:28
 * @route '/admin/product-categories/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\ProductCategoryController::create
 * @see app/Http/Controllers/Admin/ProductCategoryController.php:28
 * @route '/admin/product-categories/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\ProductCategoryController::create
 * @see app/Http/Controllers/Admin/ProductCategoryController.php:28
 * @route '/admin/product-categories/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\ProductCategoryController::create
 * @see app/Http/Controllers/Admin/ProductCategoryController.php:28
 * @route '/admin/product-categories/create'
 */
        createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    create.form = createForm
/**
* @see \App\Http\Controllers\Admin\ProductCategoryController::store
 * @see app/Http/Controllers/Admin/ProductCategoryController.php:36
 * @route '/admin/product-categories'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/product-categories',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\ProductCategoryController::store
 * @see app/Http/Controllers/Admin/ProductCategoryController.php:36
 * @route '/admin/product-categories'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ProductCategoryController::store
 * @see app/Http/Controllers/Admin/ProductCategoryController.php:36
 * @route '/admin/product-categories'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\ProductCategoryController::store
 * @see app/Http/Controllers/Admin/ProductCategoryController.php:36
 * @route '/admin/product-categories'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\ProductCategoryController::store
 * @see app/Http/Controllers/Admin/ProductCategoryController.php:36
 * @route '/admin/product-categories'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Admin\ProductCategoryController::edit
 * @see app/Http/Controllers/Admin/ProductCategoryController.php:68
 * @route '/admin/product-categories/edit/{productCategory}'
 */
export const edit = (args: { productCategory: number | { id: number } } | [productCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/product-categories/edit/{productCategory}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ProductCategoryController::edit
 * @see app/Http/Controllers/Admin/ProductCategoryController.php:68
 * @route '/admin/product-categories/edit/{productCategory}'
 */
edit.url = (args: { productCategory: number | { id: number } } | [productCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { productCategory: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { productCategory: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    productCategory: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        productCategory: typeof args.productCategory === 'object'
                ? args.productCategory.id
                : args.productCategory,
                }

    return edit.definition.url
            .replace('{productCategory}', parsedArgs.productCategory.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ProductCategoryController::edit
 * @see app/Http/Controllers/Admin/ProductCategoryController.php:68
 * @route '/admin/product-categories/edit/{productCategory}'
 */
edit.get = (args: { productCategory: number | { id: number } } | [productCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\ProductCategoryController::edit
 * @see app/Http/Controllers/Admin/ProductCategoryController.php:68
 * @route '/admin/product-categories/edit/{productCategory}'
 */
edit.head = (args: { productCategory: number | { id: number } } | [productCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\ProductCategoryController::edit
 * @see app/Http/Controllers/Admin/ProductCategoryController.php:68
 * @route '/admin/product-categories/edit/{productCategory}'
 */
    const editForm = (args: { productCategory: number | { id: number } } | [productCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\ProductCategoryController::edit
 * @see app/Http/Controllers/Admin/ProductCategoryController.php:68
 * @route '/admin/product-categories/edit/{productCategory}'
 */
        editForm.get = (args: { productCategory: number | { id: number } } | [productCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\ProductCategoryController::edit
 * @see app/Http/Controllers/Admin/ProductCategoryController.php:68
 * @route '/admin/product-categories/edit/{productCategory}'
 */
        editForm.head = (args: { productCategory: number | { id: number } } | [productCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    edit.form = editForm
/**
* @see \App\Http\Controllers\Admin\ProductCategoryController::update
 * @see app/Http/Controllers/Admin/ProductCategoryController.php:79
 * @route '/admin/product-categories/{productCategory}'
 */
export const update = (args: { productCategory: number | { id: number } } | [productCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/admin/product-categories/{productCategory}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Admin\ProductCategoryController::update
 * @see app/Http/Controllers/Admin/ProductCategoryController.php:79
 * @route '/admin/product-categories/{productCategory}'
 */
update.url = (args: { productCategory: number | { id: number } } | [productCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { productCategory: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { productCategory: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    productCategory: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        productCategory: typeof args.productCategory === 'object'
                ? args.productCategory.id
                : args.productCategory,
                }

    return update.definition.url
            .replace('{productCategory}', parsedArgs.productCategory.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ProductCategoryController::update
 * @see app/Http/Controllers/Admin/ProductCategoryController.php:79
 * @route '/admin/product-categories/{productCategory}'
 */
update.put = (args: { productCategory: number | { id: number } } | [productCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\Admin\ProductCategoryController::update
 * @see app/Http/Controllers/Admin/ProductCategoryController.php:79
 * @route '/admin/product-categories/{productCategory}'
 */
    const updateForm = (args: { productCategory: number | { id: number } } | [productCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\ProductCategoryController::update
 * @see app/Http/Controllers/Admin/ProductCategoryController.php:79
 * @route '/admin/product-categories/{productCategory}'
 */
        updateForm.put = (args: { productCategory: number | { id: number } } | [productCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\Admin\ProductCategoryController::destroy
 * @see app/Http/Controllers/Admin/ProductCategoryController.php:100
 * @route '/admin/product-categories/delete/{productCategory}'
 */
export const destroy = (args: { productCategory: number | { id: number } } | [productCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/product-categories/delete/{productCategory}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\ProductCategoryController::destroy
 * @see app/Http/Controllers/Admin/ProductCategoryController.php:100
 * @route '/admin/product-categories/delete/{productCategory}'
 */
destroy.url = (args: { productCategory: number | { id: number } } | [productCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { productCategory: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { productCategory: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    productCategory: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        productCategory: typeof args.productCategory === 'object'
                ? args.productCategory.id
                : args.productCategory,
                }

    return destroy.definition.url
            .replace('{productCategory}', parsedArgs.productCategory.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ProductCategoryController::destroy
 * @see app/Http/Controllers/Admin/ProductCategoryController.php:100
 * @route '/admin/product-categories/delete/{productCategory}'
 */
destroy.delete = (args: { productCategory: number | { id: number } } | [productCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Admin\ProductCategoryController::destroy
 * @see app/Http/Controllers/Admin/ProductCategoryController.php:100
 * @route '/admin/product-categories/delete/{productCategory}'
 */
    const destroyForm = (args: { productCategory: number | { id: number } } | [productCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\ProductCategoryController::destroy
 * @see app/Http/Controllers/Admin/ProductCategoryController.php:100
 * @route '/admin/product-categories/delete/{productCategory}'
 */
        destroyForm.delete = (args: { productCategory: number | { id: number } } | [productCategory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const productCategories = {
    index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default productCategories