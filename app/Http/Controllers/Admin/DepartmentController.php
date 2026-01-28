<?php

namespace App\Http\Controllers\Admin;

use App\Models\Department;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Controllers\Controller;

class DepartmentController extends Controller
{
    public function index()
    {
        return Inertia::render('admin/departments/index', [
            'departments' => Department::orderBy('sort_order')->get()
        ]);
    }

    public function create()
    {
        return Inertia::render('admin/departments/create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'whatsapp' => 'nullable|string',
            'email' => 'nullable|email',
            'sort_order' => 'nullable|integer'
        ]);

        Department::create($validated);

        return redirect()->route('departments.index')->with('message', 'Departamento criado com sucesso!');
    }

    public function edit(int $departmentId)
    {
        $department = Department::findOrFail($departmentId);

        return Inertia::render('admin/departments/edit', [
            'department' => $department
        ]);
    }

    public function update(Request $request, int $departmentId)
    {
        $department = Department::findOrFail($departmentId);

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'whatsapp' => 'nullable|string',
            'email' => 'nullable|email',
            'sort_order' => 'nullable|integer'
        ]);

        $department->update($validated);

        return redirect()->route('departments.index')->with('message', 'Departamento atualizado!');
    }

    public function destroy(int $departmentId)
    {
        $department = Department::findOrFail($departmentId);
        $department->delete();
        return redirect()->back()->with('message', 'Departamento removido!');
    }
}
