<?php

namespace App\Http\Controllers\Admin;

use App\Models\Department;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class DepartmentController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'whatsapp' => 'nullable|string|max:20',
            'email' => 'nullable|email',
            'sort_order' => 'nullable|integer'
        ]);

        Department::create($validated);

        return redirect()->back()->with('message', 'Departamento criado com sucesso!');
    }

    public function update(Request $request, Department $department)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'whatsapp' => 'nullable|string|max:20',
            'email' => 'nullable|email',
            'sort_order' => 'nullable|integer'
        ]);

        $department->update($validated);

        return redirect()->back()->with('message', 'Departamento atualizado!');
    }

    public function destroy(Department $department)
    {
        $department->delete();
        return redirect()->back()->with('message', 'Departamento removido!');
    }
}
