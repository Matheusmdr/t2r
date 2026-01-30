import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\ServiceController::indexPublic
 * @see app/Http/Controllers/Admin/ServiceController.php:14
 * @route '/servicos'
 */
export const indexPublic = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexPublic.url(options),
    method: 'get',
})

indexPublic.definition = {
    methods: ["get","head"],
    url: '/servicos',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ServiceController::indexPublic
 * @see app/Http/Controllers/Admin/ServiceController.php:14
 * @route '/servicos'
 */
indexPublic.url = (options?: RouteQueryOptions) => {
    return indexPublic.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ServiceController::indexPublic
 * @see app/Http/Controllers/Admin/ServiceController.php:14
 * @route '/servicos'
 */
indexPublic.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexPublic.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\ServiceController::indexPublic
 * @see app/Http/Controllers/Admin/ServiceController.php:14
 * @route '/servicos'
 */
indexPublic.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexPublic.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\ServiceController::indexPublic
 * @see app/Http/Controllers/Admin/ServiceController.php:14
 * @route '/servicos'
 */
    const indexPublicForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: indexPublic.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\ServiceController::indexPublic
 * @see app/Http/Controllers/Admin/ServiceController.php:14
 * @route '/servicos'
 */
        indexPublicForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: indexPublic.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\ServiceController::indexPublic
 * @see app/Http/Controllers/Admin/ServiceController.php:14
 * @route '/servicos'
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
* @see \App\Http\Controllers\Admin\ServiceController::showPublic
 * @see app/Http/Controllers/Admin/ServiceController.php:28
 * @route '/servicos/{slug}'
 */
export const showPublic = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showPublic.url(args, options),
    method: 'get',
})

showPublic.definition = {
    methods: ["get","head"],
    url: '/servicos/{slug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ServiceController::showPublic
 * @see app/Http/Controllers/Admin/ServiceController.php:28
 * @route '/servicos/{slug}'
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
* @see \App\Http\Controllers\Admin\ServiceController::showPublic
 * @see app/Http/Controllers/Admin/ServiceController.php:28
 * @route '/servicos/{slug}'
 */
showPublic.get = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showPublic.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\ServiceController::showPublic
 * @see app/Http/Controllers/Admin/ServiceController.php:28
 * @route '/servicos/{slug}'
 */
showPublic.head = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showPublic.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\ServiceController::showPublic
 * @see app/Http/Controllers/Admin/ServiceController.php:28
 * @route '/servicos/{slug}'
 */
    const showPublicForm = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: showPublic.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\ServiceController::showPublic
 * @see app/Http/Controllers/Admin/ServiceController.php:28
 * @route '/servicos/{slug}'
 */
        showPublicForm.get = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showPublic.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\ServiceController::showPublic
 * @see app/Http/Controllers/Admin/ServiceController.php:28
 * @route '/servicos/{slug}'
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
* @see \App\Http\Controllers\Admin\ServiceController::index
 * @see app/Http/Controllers/Admin/ServiceController.php:21
 * @route '/admin/services'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/services',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ServiceController::index
 * @see app/Http/Controllers/Admin/ServiceController.php:21
 * @route '/admin/services'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ServiceController::index
 * @see app/Http/Controllers/Admin/ServiceController.php:21
 * @route '/admin/services'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\ServiceController::index
 * @see app/Http/Controllers/Admin/ServiceController.php:21
 * @route '/admin/services'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\ServiceController::index
 * @see app/Http/Controllers/Admin/ServiceController.php:21
 * @route '/admin/services'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\ServiceController::index
 * @see app/Http/Controllers/Admin/ServiceController.php:21
 * @route '/admin/services'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\ServiceController::index
 * @see app/Http/Controllers/Admin/ServiceController.php:21
 * @route '/admin/services'
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
* @see \App\Http\Controllers\Admin\ServiceController::create
 * @see app/Http/Controllers/Admin/ServiceController.php:42
 * @route '/admin/services/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/services/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ServiceController::create
 * @see app/Http/Controllers/Admin/ServiceController.php:42
 * @route '/admin/services/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ServiceController::create
 * @see app/Http/Controllers/Admin/ServiceController.php:42
 * @route '/admin/services/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\ServiceController::create
 * @see app/Http/Controllers/Admin/ServiceController.php:42
 * @route '/admin/services/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\ServiceController::create
 * @see app/Http/Controllers/Admin/ServiceController.php:42
 * @route '/admin/services/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\ServiceController::create
 * @see app/Http/Controllers/Admin/ServiceController.php:42
 * @route '/admin/services/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\ServiceController::create
 * @see app/Http/Controllers/Admin/ServiceController.php:42
 * @route '/admin/services/create'
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
* @see \App\Http\Controllers\Admin\ServiceController::store
 * @see app/Http/Controllers/Admin/ServiceController.php:54
 * @route '/admin/services'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/services',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\ServiceController::store
 * @see app/Http/Controllers/Admin/ServiceController.php:54
 * @route '/admin/services'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ServiceController::store
 * @see app/Http/Controllers/Admin/ServiceController.php:54
 * @route '/admin/services'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\ServiceController::store
 * @see app/Http/Controllers/Admin/ServiceController.php:54
 * @route '/admin/services'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\ServiceController::store
 * @see app/Http/Controllers/Admin/ServiceController.php:54
 * @route '/admin/services'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Admin\ServiceController::edit
 * @see app/Http/Controllers/Admin/ServiceController.php:47
 * @route '/admin/services/edit/{service}'
 */
export const edit = (args: { service: number | { id: number } } | [service: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/services/edit/{service}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ServiceController::edit
 * @see app/Http/Controllers/Admin/ServiceController.php:47
 * @route '/admin/services/edit/{service}'
 */
edit.url = (args: { service: number | { id: number } } | [service: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { service: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { service: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    service: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        service: typeof args.service === 'object'
                ? args.service.id
                : args.service,
                }

    return edit.definition.url
            .replace('{service}', parsedArgs.service.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ServiceController::edit
 * @see app/Http/Controllers/Admin/ServiceController.php:47
 * @route '/admin/services/edit/{service}'
 */
edit.get = (args: { service: number | { id: number } } | [service: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\ServiceController::edit
 * @see app/Http/Controllers/Admin/ServiceController.php:47
 * @route '/admin/services/edit/{service}'
 */
edit.head = (args: { service: number | { id: number } } | [service: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\ServiceController::edit
 * @see app/Http/Controllers/Admin/ServiceController.php:47
 * @route '/admin/services/edit/{service}'
 */
    const editForm = (args: { service: number | { id: number } } | [service: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\ServiceController::edit
 * @see app/Http/Controllers/Admin/ServiceController.php:47
 * @route '/admin/services/edit/{service}'
 */
        editForm.get = (args: { service: number | { id: number } } | [service: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\ServiceController::edit
 * @see app/Http/Controllers/Admin/ServiceController.php:47
 * @route '/admin/services/edit/{service}'
 */
        editForm.head = (args: { service: number | { id: number } } | [service: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Admin\ServiceController::update
 * @see app/Http/Controllers/Admin/ServiceController.php:77
 * @route '/admin/services/{service}'
 */
export const update = (args: { service: number | { id: number } } | [service: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/admin/services/{service}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Admin\ServiceController::update
 * @see app/Http/Controllers/Admin/ServiceController.php:77
 * @route '/admin/services/{service}'
 */
update.url = (args: { service: number | { id: number } } | [service: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { service: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { service: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    service: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        service: typeof args.service === 'object'
                ? args.service.id
                : args.service,
                }

    return update.definition.url
            .replace('{service}', parsedArgs.service.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ServiceController::update
 * @see app/Http/Controllers/Admin/ServiceController.php:77
 * @route '/admin/services/{service}'
 */
update.put = (args: { service: number | { id: number } } | [service: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\Admin\ServiceController::update
 * @see app/Http/Controllers/Admin/ServiceController.php:77
 * @route '/admin/services/{service}'
 */
    const updateForm = (args: { service: number | { id: number } } | [service: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\ServiceController::update
 * @see app/Http/Controllers/Admin/ServiceController.php:77
 * @route '/admin/services/{service}'
 */
        updateForm.put = (args: { service: number | { id: number } } | [service: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Admin\ServiceController::destroy
 * @see app/Http/Controllers/Admin/ServiceController.php:109
 * @route '/admin/services/delete/{service}'
 */
export const destroy = (args: { service: number | { id: number } } | [service: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/services/delete/{service}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\ServiceController::destroy
 * @see app/Http/Controllers/Admin/ServiceController.php:109
 * @route '/admin/services/delete/{service}'
 */
destroy.url = (args: { service: number | { id: number } } | [service: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { service: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { service: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    service: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        service: typeof args.service === 'object'
                ? args.service.id
                : args.service,
                }

    return destroy.definition.url
            .replace('{service}', parsedArgs.service.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ServiceController::destroy
 * @see app/Http/Controllers/Admin/ServiceController.php:109
 * @route '/admin/services/delete/{service}'
 */
destroy.delete = (args: { service: number | { id: number } } | [service: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Admin\ServiceController::destroy
 * @see app/Http/Controllers/Admin/ServiceController.php:109
 * @route '/admin/services/delete/{service}'
 */
    const destroyForm = (args: { service: number | { id: number } } | [service: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\ServiceController::destroy
 * @see app/Http/Controllers/Admin/ServiceController.php:109
 * @route '/admin/services/delete/{service}'
 */
        destroyForm.delete = (args: { service: number | { id: number } } | [service: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const ServiceController = { indexPublic, showPublic, index, create, store, edit, update, destroy }

export default ServiceController