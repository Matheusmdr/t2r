<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            // Relacionamento com Categoria
            $table->foreignId('product_category_id')->constrained()->onDelete('cascade');

            $table->string('title');
            $table->string('slug')->unique();
            $table->string('sku')->nullable(); // Código do produto

            $table->text('short_description')->nullable();
            $table->longText('description')->nullable(); // HTML ou Markdown

            // Imagens
            $table->string('cover_image')->nullable();
            $table->json('gallery_images')->nullable();

            // Metadados
            $table->json('tags')->nullable(); // ["DJI", "Mavic"]
            $table->json('tech_specs')->nullable(); // Tabela técnica { "Peso": "200g", "Alcance": "10km" }

            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
