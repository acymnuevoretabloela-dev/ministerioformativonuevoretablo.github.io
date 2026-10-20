import { useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';

interface ToastProps {
  message: string;
  show: boolean;
  onClose: () => void;
  variant?: 'success' | 'error';
}

export function Toast({ message, show, onClose, variant = 'success' }: ToastProps) {
  useEffect(() => {
    if (show) {
      const t = setTimeout(onClose, 4000);
      return () => clearTimeout(t);
    }
  }, [show, onClose]);

  if (!show) return null;

  const isSuccess = variant === 'success';

  return (
    <div className="fixed bottom-24 right-6 z-[100] animate-slide-in-right">
      <div className="flex items-center gap-3 rounded-2xl border border-cream-300 bg-white px-5 py-4 shadow-2xl shadow-navy-900/10">
        <div className={`flex h-9 w-9 items-center justify-center rounded-full ${isSuccess ? 'bg-green-100' : 'bg-red-100'}`}>
          <CheckCircle2 className={`h-5 w-5 ${isSuccess ? 'text-green-600' : 'text-red-600'}`} />
        </div>
        <p className="text-sm font-medium text-navy-800">{message}</p>
        <button
          onClick={onClose}
          className="ml-1 flex h-7 w-7 items-center justify-center rounded-full text-navy-400 transition-colors hover:bg-navy-100 hover:text-navy-700"
          aria-label="Cerrar notificación"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
