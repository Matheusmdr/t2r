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
        Schema::create('services', function (Blueprint $table) {
            $table->id();
            $table->string('title'); // Ex: "Suporte Técnico PPK"
            $table->string('slug')->unique();

            $table->text('short_description')->nullable();
            $table->longText('content'); // Conteúdo principal

            // Campos específicos vistos nas imagens
            $table->json('features_list')->nullable(); // Bullets: ["Suporte ART", "Orientação Voo"]
            $table->json('plans')->nullable(); // JSON: [{name: "Anual", price: "..."}, {name: "Semestral"}]

            $table->string('cover_image')->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('services');
    }
};
