'use client';

import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useCategories, Category } from '../../context/CategoryContext';

interface NewCategoryModalProps {
    isOpen: boolean;
    onClose: () => void;
    editCategory?: Category | null;
}

const colors = [
    '#6366f1', '#a855f7', '#ec4899', '#ef4444', '#f59e0b', '#10b981',
    '#06b6d4', '#3b82f6', '#14b8a6', '#8b5cf6', '#f97316', '#84cc16'
];

const NewCategoryModal: React.FC<NewCategoryModalProps> = ({ isOpen, onClose, editCategory }) => {
    const { addCategory, updateCategory } = useCategories();
    const [selectedColor, setSelectedColor] = useState(colors[0]);
    const [name, setName] = useState('');

    useEffect(() => {
        if (editCategory) {
            setName(editCategory.name);
            setSelectedColor(editCategory.color);
        } else {
            setName('');
            setSelectedColor(colors[0]);
        }
    }, [editCategory, isOpen]);

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim()) return;

        if (editCategory) {
            updateCategory(editCategory.id, { name, color: selectedColor });
        } else {
            addCategory({ name, color: selectedColor });
        }

        setName('');
        onClose();
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm transition-all duration-300">
            <div
                className="bg-white w-full max-w-md rounded-2xl shadow-xl shadow-indigo-200/20 overflow-hidden transform transition-all animate-in fade-in zoom-in duration-300"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="p-6 md:p-8 pb-4 flex items-center justify-between">
                    <h3 className="heading-2">
                        {editCategory ? 'Edit Category' : 'New Category'}
                    </h3>
                    <button
                        onClick={onClose}
                        className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-slate-600 transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Form Content */}
                <form onSubmit={handleSubmit} className="px-6 md:px-8 pb-8 space-y-6">
                    <div className="space-y-2">
                        <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-1">Category Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="e.g., Food, Transport, Entertainment"
                            className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-xl text-slate-900 font-medium placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all text-sm"
                        />
                    </div>

                    <div className="space-y-3 pb-2">
                        <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-1">Color</label>
                        <div className="grid grid-cols-6 gap-3">
                            {colors.map((color) => (
                                <button
                                    key={color}
                                    type="button"
                                    onClick={() => setSelectedColor(color)}
                                    className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all ${selectedColor === color ? 'ring-2 ring-offset-2 ring-indigo-500 scale-105' : 'hover:scale-105'
                                        }`}
                                    style={{ backgroundColor: color }}
                                />
                            ))}
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="btn-primary w-full py-4 rounded-xl text-sm font-semibold tracking-normal mt-2"
                    >
                        {editCategory ? 'Update Category' : 'Create Category'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default NewCategoryModal;
