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
        <div className="bg-white p-5 md:p-6 rounded-[1.2rem] md:rounded-2xl border border-slate-50 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 group flex flex-col items-center justify-center relative min-h-[140px] md:min-h-[160px] cursor-pointer">
            {/* Action Buttons - Visible on Hover */}
            <div className="absolute top-3 right-3 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                    onClick={(e) => { e.stopPropagation(); onEdit?.(); }}
                    className="p-1.5 bg-white text-slate-400 hover:text-indigo-600 rounded-lg transition-colors border border-slate-100 shadow-sm"
                >
                    <Edit2 size={13} />
                </button>
                <button
                    onClick={(e) => { e.stopPropagation(); onDelete?.(); }}
                    className="p-1.5 bg-white text-slate-400 hover:text-rose-600 rounded-lg transition-colors border border-slate-100 shadow-sm"
                >
                    <Trash2 size={13} />
                </button>
            </div>

            {/* Icon Square */}
            <div
                className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center text-white shadow-lg transition-transform group-hover:scale-110 duration-300"
                style={{
                    backgroundColor: color,
                    boxShadow: `0 8px 16px -4px ${color}40`
                }}
            >
                <Tag className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />
            </div>

            {/* Text Info */}
            <div className="text-center mt-2">
                <h4 className="text-[14px] md:text-[15px] font-bold text-slate-900 tracking-tight leading-none mb-1.5">{name}</h4>
                {isSystem && (
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none">System</p>
                )}
            </div>
        </div>
    );
};

export default CategoryCard;
