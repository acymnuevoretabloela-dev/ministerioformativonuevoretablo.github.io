import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { Courses } from '@/components/Courses';
import { Ministries } from '@/components/Ministries';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { WhatsAppFab } from '@/components/WhatsAppFab';
import { Toast } from '@/components/Toast';

interface ToastState {
  show: boolean;
  message: string;
  variant: 'success' | 'error';
}

function App() {
  const [toast, setToast] = useState<ToastState>({ show: false, message: '', variant: 'success' });

  const showToast = (t: ToastState) => setToast(t);

  return (
    <div className="min-h-screen bg-cream-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Courses />
        <Ministries />
        <Contact onToast={showToast} />
      </main>
      <Footer />
      <WhatsAppFab />
      <Toast
        show={toast.show}
        message={toast.message}
        variant={toast.variant}
        onClose={() => setToast((t) => ({ ...t, show: false }))}
      />
    </div>
  );
}

export default App;
