import { useState, useEffect } from 'react';
import { Heart, X, Copy, Check, Shield, QrCode } from 'lucide-react';

// QR Code image
const qrCodeImage = new URL('../../assets/WhatsApp Image 2025-12-27 at 11.41.19 AM.jpeg', import.meta.url).href;

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DonationModal({ isOpen, onClose }: DonationModalProps) {
  const [copied, setCopied] = useState(false);
  const UPI_ID = "7083967973@upi";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(UPI_ID);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />
      
      {/* Modal Content */}
      <div 
        className="relative w-full max-w-lg animate-in zoom-in-95 fade-in duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 z-10 p-2.5 rounded-full bg-white/90 hover:bg-white shadow-lg hover:scale-110 transition-all duration-300"
        >
          <X className="w-5 h-5 text-gray-700" />
        </button>
        
        {/* Modal Card */}
        <div className="relative overflow-hidden rounded-3xl">
          {/* Header Gradient */}
          <div className="bg-gradient-to-br from-[var(--success)] via-[var(--primary)] to-[var(--secondary)] p-6 text-center">
            <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-white/20 backdrop-blur-sm mb-4">
              <Heart className="w-8 h-8 text-white animate-pulse" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Support Our Cause</h2>
            <p className="text-white/90 text-sm">Every contribution helps us serve the community better</p>
          </div>
          
          {/* QR Code Section */}
          <div className="bg-white p-6">
            {/* QR Code */}
            <div className="relative mx-auto w-fit mb-6">
              <div className="p-3 bg-gradient-to-br from-[var(--primary)]/10 to-[var(--secondary)]/10 rounded-2xl">
                <div className="p-2 bg-white rounded-xl shadow-lg">
                  <img 
                    src={qrCodeImage} 
                    alt="UPI QR Code for Donation" 
                    className="w-52 h-52 object-contain rounded-lg"
                  />
                </div>
              </div>
              {/* QR Code Badge */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white text-xs font-medium flex items-center gap-1.5 shadow-lg">
                <QrCode className="w-3 h-3" />
                Scan to Pay
              </div>
            </div>
            
            {/* Divider */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
              <span className="text-gray-500 text-sm font-medium">or pay using UPI ID</span>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
            </div>
            
            {/* UPI ID Copy Section */}
            <div className="glass-card p-2 mb-0">
              <div className="flex items-center justify-between gap-3">
                <div className="flex-1">
                  <p className="text-xs text-[var(--muted-foreground)] mb-1 font-medium">UPI ID</p>
                  <p className="text-lg font-bold text-[var(--foreground)] font-mono">{UPI_ID}</p>
                </div>
                <button
                  onClick={copyToClipboard}
                  className={`p-3 rounded-xl transition-all duration-300 ${
                    copied 
                      ? 'bg-[var(--success)] text-white' 
                      : 'bg-[var(--primary)]/10 text-[var(--primary)] hover:bg-[var(--primary)]/20'
                  }`}
                >
                  {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                </button>
              </div>
              {copied && (
                <p className="text-[var(--success)] text-xs mt-2 font-medium animate-in fade-in duration-200">
                  ✓ UPI ID copied to clipboard!
                </p>
              )}
            </div>
            
            {/* Trust Badges */}
            {/* <div className="flex items-center justify-center gap-6 mb-6">
              <div className="flex items-center gap-2 text-gray-600">
                <Shield className="w-4 h-4 text-[var(--success)]" />
                <span className="text-xs">Secure Payment</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Heart className="w-4 h-4 text-[var(--accent)]" />
                <span className="text-xs">100% for Community</span>
              </div>
            </div> */}
            
            {/* Payment Apps Info */}
            {/* <div className="text-center"> */}
              {/* <p className="text-xs text-gray-500 mb-2">Supported Payment Apps</p>
              <div className="flex items-center justify-center gap-3">
                <span className="px-3 py-1.5 rounded-full bg-purple-100 text-purple-700 text-xs font-medium">PhonePe</span>
                <span className="px-3 py-1.5 rounded-full bg-green-100 text-green-700 text-xs font-medium">GPay</span>
                <span className="px-3 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs font-medium">Paytm</span>
                <span className="px-3 py-1.5 rounded-full bg-orange-100 text-orange-700 text-xs font-medium">BHIM</span>
              </div>
            </div> */}
          </div>
          
          {/* Footer */}
          <div className="bg-gray-50 px-6 py-4 text-center border-t border-gray-100">
            <p className="text-xs text-gray-500">
              देवा बहुउद्देशीय संस्था, पुसद • Thank you for your generosity! 🙏
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

