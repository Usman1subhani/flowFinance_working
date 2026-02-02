'use client';

import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { useCategories, Category } from '../../context/CategoryContext';
import CategoryCard from '../../components/category/CategoryCard';
import NewCategoryModal from '../../components/category/NewCategoryModal';

const CategoriesScreen = () => {
    const { categories, deleteCategory } = useCategories();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

    const handleEdit = (category: Category) => {
        setSelectedCategory(category);
        setIsModalOpen(true);
    };

    const handleAddNew = () => {
        setSelectedCategory(null);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedCategory(null);
    };

    return (
        <div className="animate-in fade-in duration-500">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 md:mb-10">
                <div>
                    <h1 className="heading-1">Categories</h1>
                    <p className="text-sub mt-1">Organize your expenses with custom categories</p>
                </div>

                <button
                    onClick={handleAddNew}
                    className="btn-primary flex items-center gap-2"
                >
                    <Plus size={18} />
                    New Category
                </button>
            </div>

            {/* Grid Layout for Categories */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
                {categories.map((category) => (
                    <CategoryCard
                        key={category.id}
                        {...category}
                        onEdit={() => handleEdit(category)}
                        onDelete={() => deleteCategory(category.id)}
                    />
                ))}
            </div>

            <NewCategoryModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                editCategory={selectedCategory}
            />
        </div>
    );
};

export default CategoriesScreen;
