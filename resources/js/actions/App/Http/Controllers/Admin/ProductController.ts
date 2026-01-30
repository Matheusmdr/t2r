import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\ProductController::indexPublic
 * @see app/Http/Controllers/Admin/ProductController.php:18
 * @route '/produtos'
 */
export const indexPublic = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexPublic.url(options),
    method: 'get',
})

indexPublic.definition = {
    methods: ["get","head"],
    url: '/produtos',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ProductController::indexPublic
 * @see app/Http/Controllers/Admin/ProductController.php:18
 * @route '/produtos'
 */
indexPublic.url = (options?: RouteQueryOptions) => {
    return indexPublic.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ProductController::indexPublic
 * @see app/Http/Controllers/Admin/ProductController.php:18
 * @route '/produtos'
 */
indexPublic.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexPublic.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\ProductController::indexPublic
 * @see app/Http/Controllers/Admin/ProductController.php:18
 * @route '/produtos'
 */
indexPublic.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexPublic.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\ProductController::indexPublic
 * @see app/Http/Controllers/Admin/ProductController.php:18
 * @route '/produtos'
 */
    const indexPublicForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: indexPublic.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\ProductController::indexPublic
 * @see app/Http/Controllers/Admin/ProductController.php:18
 * @route '/produtos'
 */
        indexPublicForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: indexPublic.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\ProductController::indexPublic
 * @see app/Http/Controllers/Admin/ProductController.php:18
 * @route '/produtos'
 */
        indexPublicForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: indexPublic.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    indexPublic.form = indexPublicForm
/**
* @see \App\Http\Controllers\Admin\ProductController::showPublic
 * @see app/Http/Controllers/Admin/ProductController.php:25
 * @route '/produtos/{slug}'
 */
export const showPublic = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showPublic.url(args, options),
    method: 'get',
})

showPublic.definition = {
    methods: ["get","head"],
    url: '/produtos/{slug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ProductController::showPublic
 * @see app/Http/Controllers/Admin/ProductController.php:25
 * @route '/produtos/{slug}'
 */
showPublic.url = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { slug: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    slug: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        slug: args.slug,
                }

    return showPublic.definition.url
            .replace('{slug}', parsedArgs.slug.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ProductController::showPublic
 * @see app/Http/Controllers/Admin/ProductController.php:25
 * @route '/produtos/{slug}'
 */
showPublic.get = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showPublic.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\ProductController::showPublic
 * @see app/Http/Controllers/Admin/ProductController.php:25
 * @route '/produtos/{slug}'
 */
showPublic.head = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showPublic.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\ProductController::showPublic
 * @see app/Http/Controllers/Admin/ProductController.php:25
 * @route '/produtos/{slug}'
 */
    const showPublicForm = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: showPublic.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\ProductController::showPublic
 * @see app/Http/Controllers/Admin/ProductController.php:25
 * @route '/produtos/{slug}'
 */
        showPublicForm.get = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showPublic.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\ProductController::showPublic
 * @see app/Http/Controllers/Admin/ProductController.php:25
 * @route '/produtos/{slug}'
 */
        showPublicForm.head = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showPublic.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    showPublic.form = showPublicForm
/**
* @see \App\Http\Controllers\Admin\ProductController::index
 * @see app/Http/Controllers/Admin/ProductController.php:39
 * @route '/admin/products'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/products',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ProductController::index
 * @see app/Http/Controllers/Admin/ProductController.php:39
 * @route '/admin/products'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ProductController::index
 * @see app/Http/Controllers/Admin/ProductController.php:39
 * @route '/admin/products'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\ProductController::index
 * @see app/Http/Controllers/Admin/ProductController.php:39
 * @route '/admin/products'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\ProductController::index
 * @see app/Http/Controllers/Admin/ProductController.php:39
 * @route '/admin/products'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\ProductController::index
 * @see app/Http/Controllers/Admin/ProductController.php:39
 * @route '/admin/products'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\ProductController::index
 * @see app/Http/Controllers/Admin/ProductController.php:39
 * @route '/admin/products'
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
* @see \App\Http\Controllers\Admin\ProductController::create
 * @see app/Http/Controllers/Admin/ProductController.php:47
 * @route '/admin/products/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/products/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ProductController::create
 * @see app/Http/Controllers/Admin/ProductController.php:47
 * @route '/admin/products/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ProductController::create
 * @see app/Http/Controllers/Admin/ProductController.php:47
 * @route '/admin/products/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\ProductController::create
 * @see app/Http/Controllers/Admin/ProductController.php:47
 * @route '/admin/products/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\ProductController::create
 * @see app/Http/Controllers/Admin/ProductController.php:47
 * @route '/admin/products/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\ProductController::create
 * @see app/Http/Controllers/Admin/ProductController.php:47
 * @route '/admin/products/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\ProductController::create
 * @see app/Http/Controllers/Admin/ProductController.php:47
 * @route '/admin/products/create'
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
* @see \App\Http\Controllers\Admin\ProductController::store
 * @see app/Http/Controllers/Admin/ProductController.php:63
 * @route '/admin/products'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/products',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\ProductController::store
 * @see app/Http/Controllers/Admin/ProductController.php:63
 * @route '/admin/products'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ProductController::store
 * @see app/Http/Controllers/Admin/ProductController.php:63
 * @route '/admin/products'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\ProductController::store
 * @see app/Http/Controllers/Admin/ProductController.php:63
 * @route '/admin/products'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\ProductController::store
 * @see app/Http/Controllers/Admin/ProductController.php:63
 * @route '/admin/products'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Admin\ProductController::edit
 * @see app/Http/Controllers/Admin/ProductController.php:54
 * @route '/admin/products/edit/{product}'
 */
export const edit = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/products/edit/{product}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ProductController::edit
 * @see app/Http/Controllers/Admin/ProductController.php:54
 * @route '/admin/products/edit/{product}'
 */
edit.url = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { product: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { product: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    product: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        product: typeof args.product === 'object'
                ? args.product.id
                : args.product,
                }

    return edit.definition.url
            .replace('{product}', parsedArgs.product.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ProductController::edit
 * @see app/Http/Controllers/Admin/ProductController.php:54
 * @route '/admin/products/edit/{product}'
 */
edit.get = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\ProductController::edit
 * @see app/Http/Controllers/Admin/ProductController.php:54
 * @route '/admin/products/edit/{product}'
 */
edit.head = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\ProductController::edit
 * @see app/Http/Controllers/Admin/ProductController.php:54
 * @route '/admin/products/edit/{product}'
 */
    const editForm = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\ProductController::edit
 * @see app/Http/Controllers/Admin/ProductController.php:54
 * @route '/admin/products/edit/{product}'
 */
        editForm.get = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\ProductController::edit
 * @see app/Http/Controllers/Admin/ProductController.php:54
 * @route '/admin/products/edit/{product}'
 */
        editForm.head = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Admin\ProductController::update
 * @see app/Http/Controllers/Admin/ProductController.php:94
 * @route '/admin/products/{product}'
 */
export const update = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/admin/products/{product}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Admin\ProductController::update
 * @see app/Http/Controllers/Admin/ProductController.php:94
 * @route '/admin/products/{product}'
 */
update.url = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { product: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { product: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    product: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        product: typeof args.product === 'object'
                ? args.product.id
                : args.product,
                }

    return update.definition.url
            .replace('{product}', parsedArgs.product.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ProductController::update
 * @see app/Http/Controllers/Admin/ProductController.php:94
 * @route '/admin/products/{product}'
 */
update.put = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\Admin\ProductController::update
 * @see app/Http/Controllers/Admin/ProductController.php:94
 * @route '/admin/products/{product}'
 */
    const updateForm = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\ProductController::update
 * @see app/Http/Controllers/Admin/ProductController.php:94
 * @route '/admin/products/{product}'
 */
        updateForm.put = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Admin\ProductController::destroy
 * @see app/Http/Controllers/Admin/ProductController.php:155
 * @route '/admin/products/delete/{product}'
 */
export const destroy = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/products/delete/{product}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\ProductController::destroy
 * @see app/Http/Controllers/Admin/ProductController.php:155
 * @route '/admin/products/delete/{product}'
 */
destroy.url = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { product: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { product: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    product: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        product: typeof args.product === 'object'
                ? args.product.id
                : args.product,
                }

    return destroy.definition.url
            .replace('{product}', parsedArgs.product.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ProductController::destroy
 * @see app/Http/Controllers/Admin/ProductController.php:155
 * @route '/admin/products/delete/{product}'
 */
destroy.delete = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Admin\ProductController::destroy
 * @see app/Http/Controllers/Admin/ProductController.php:155
 * @route '/admin/products/delete/{product}'
 */
    const destroyForm = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\ProductController::destroy
 * @see app/Http/Controllers/Admin/ProductController.php:155
 * @route '/admin/products/delete/{product}'
 */
        destroyForm.delete = (args: { product: number | { id: number } } | [product: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const ProductController = { indexPublic, showPublic, index, create, store, edit, update, destroy }

export default ProductController