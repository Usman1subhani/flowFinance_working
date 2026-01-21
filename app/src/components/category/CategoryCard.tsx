'use client';

import React from 'react';
import { Tag, Edit2, Trash2 } from 'lucide-react';

interface CategoryCardProps {
    id: string;
    name: string;
    color: string;
    isSystem?: boolean;
    onEdit?: () => void;
    onDelete?: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
    name,
    color,
    isSystem,
    onEdit,
    onDelete
}) => {
    return (
        <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col items-center justify-center relative min-h-[160px]">
            {/* Action Buttons - Visible on Hover */}
            <div className="absolute top-3 right-3 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                    onClick={(e) => { e.stopPropagation(); onEdit?.(); }}
                    className="p-1.5 bg-slate-50 text-slate-400 hover:text-indigo-600 rounded-lg transition-colors border border-slate-100"
                >
                    <Edit2 size={13} />
                </button>
                <button
                    onClick={(e) => { e.stopPropagation(); onDelete?.(); }}
                    className="p-1.5 bg-slate-50 text-slate-400 hover:text-rose-600 rounded-lg transition-colors border border-slate-100"
                >
                    <Trash2 size={13} />
                </button>
            </div>

            {/* Icon Square */}
            <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-sm mb-4 transition-transform group-hover:scale-105"
                style={{ backgroundColor: color }}
            >
                <Tag size={20} />
            </div>

            {/* Text Info */}
            <div className="text-center">
                <h4 className="text-[14px] font-semibold text-slate-900 tracking-tight leading-none mb-1.5">{name}</h4>
                {isSystem && (
                    <p className="text-[9px] font-bold text-slate-300 uppercase tracking-[0.1em] leading-none">System</p>
                )}
            </div>
        </div>
    );
};

export default CategoryCard;
