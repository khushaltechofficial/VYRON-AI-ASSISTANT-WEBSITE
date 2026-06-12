'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, MessageSquare, AlertCircle, Copy, Check } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import Link from 'next/link';
import ScratchCard from './ScratchCard';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Strict UTR validation: UPI UTR is always exactly 12 digits numeric
function isValidUTR(utr: string): boolean {
  return /^\d{12}$/.test(utr.trim());
}

export default function PaymentModal({ isOpen, onClose }: PaymentModalProps) {
  const [utr, setUtr] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const [scratched, setScratched] = useState(false);

  const whatsappNumber = '+91 70151 40937';
  const upiId = '7015140937-2@ybl';
  const amountToPay = scratched ? 360 : 400;
  const whatsappLink = `https://wa.me/917015140937?text=Hi,%20I%20have%20completed%20the%20payment%20of%20%E2%82%B9${amountToPay}%20for%20VYRON%20AI%20License.%20My%20UTR%20Number%20is:%20${encodeURIComponent(utr.trim())}.%20Please%20send%20me%20the%20activation%20key.`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = utr.trim();

    if (!trimmed) {
      setError('Please enter your UTR number from the payment confirmation.');
      return;
    }
    if (!/^\d+$/.test(trimmed)) {
      setError('UTR number must contain only digits — no letters or spaces.');
      return;
    }
    if (trimmed.length !== 12) {
      setError(`UTR must be exactly 12 digits. You entered ${trimmed.length} digit${trimmed.length !== 1 ? 's' : ''}.`);
      return;
    }

    setError('');
    setSubmitted(true);
  };

  const handleUtrChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow numeric input
    const val = e.target.value.replace(/\D/g, '').slice(0, 12);
    setUtr(val);
    if (error) setError('');
  };



  const handleClose = () => {
    setUtr('');
    setSubmitted(false);
    setError('');
    setScratched(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-md bg-[#09090b] border border-zinc-800 rounded-3xl p-6 md:p-8 shadow-2xl z-10 text-center overflow-hidden max-h-[90vh] overflow-y-auto"
          >
            {/* Corner Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-white/5 text-zinc-500 hover:text-white transition-colors cursor-pointer z-20"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Glowing Accent */}
            <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] bg-[#7C3AED]/10 rounded-full blur-[80px] pointer-events-none" />

            {!submitted ? (
              <div className="space-y-5 relative z-10">
                {/* Header */}
                <div>
                  <h3 className="text-xl font-black tracking-tight uppercase">Get VYRON AI License</h3>
                  <p className="text-zinc-500 text-xs font-mono tracking-widest uppercase mt-1">₹400 — One-Time Lifetime Key</p>
                </div>

                {/* Scratch Card */}
                <div className="my-2 border border-zinc-800/80 rounded-2xl p-1 bg-black/40 overflow-hidden">
                  <ScratchCard onScratched={() => setScratched(true)} />
                </div>

                {/* Amount Banner */}
                <div className="bg-[#7C3AED]/10 border border-[#7C3AED]/30 rounded-2xl px-4 py-3 flex items-center justify-between">
                  <span className="text-zinc-400 text-xs font-mono uppercase tracking-wider">Amount to Pay</span>
                  <div className="flex items-center gap-2">
                    {scratched ? (
                      <>
                        <span className="text-zinc-500 line-through text-xs font-mono">₹400</span>
                        <span className="text-emerald-400 font-black text-2xl">₹360</span>
                      </>
                    ) : (
                      <span className="text-white font-black text-2xl">₹400</span>
                    )}
                  </div>
                </div>

                {/* QR Code — dynamic, updates with amount */}
                <div className="mx-auto w-56 h-56 bg-white rounded-2xl p-2 flex items-center justify-center shadow-lg shadow-[#7C3AED]/10 relative">
                  {/* Decorative corner borders */}
                  <div className="absolute top-[-2px] left-[-2px] w-5 h-5 border-t-2 border-l-2 border-[#7C3AED] rounded-tl" />
                  <div className="absolute top-[-2px] right-[-2px] w-5 h-5 border-t-2 border-r-2 border-[#7C3AED] rounded-tr" />
                  <div className="absolute bottom-[-2px] left-[-2px] w-5 h-5 border-b-2 border-l-2 border-[#7C3AED] rounded-bl" />
                  <div className="absolute bottom-[-2px] right-[-2px] w-5 h-5 border-b-2 border-r-2 border-[#7C3AED] rounded-br" />
                  <QRCodeSVG
                    value={`upi://pay?pa=7015140937-2@ybl&pn=VYRON%20AI&am=${amountToPay}&cu=INR`}
                    size={200}
                    bgColor="#ffffff"
                    fgColor="#000000"
                    level="M"
                    className="rounded-xl"
                  />
                </div>


                <p className="text-zinc-500 text-xs leading-relaxed">
                  Scan with <span className="text-white font-bold">PhonePe, Google Pay, Paytm, BHIM</span> — ₹{amountToPay} is pre-filled.
                </p>

                {/* Strict UTR Form */}
                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-500 block">
                      Enter 12-Digit UTR / Transaction No.
                    </label>
                    <input
                      type="text"
                      inputMode="numeric"
                      placeholder="e.g. 425612345678"
                      value={utr}
                      onChange={handleUtrChange}
                      maxLength={12}
                      className={`w-full px-4 py-3 rounded-xl bg-black border ${error ? 'border-red-500' : 'border-zinc-800 focus:border-[#7C3AED]'} focus:outline-none text-sm font-mono tracking-widest transition-colors`}
                    />
                    <div className="flex items-center justify-between">
                      {error ? (
                        <p className="text-red-500 text-[10px] font-medium flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {error}
                        </p>
                      ) : (
                        <p className="text-zinc-700 text-[10px] font-mono">
                          {utr.length}/12 digits — from payment confirmation SMS/app
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Info box */}
                  <div className="bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-xs text-zinc-500 text-left space-y-1">
                    <p className="text-zinc-400 font-semibold">Where to find your UTR?</p>
                    <p>After paying, check your UPI app → Transaction History → The 12-digit number is your UTR.</p>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-[0_0_20px_rgba(124,58,237,0.3)] cursor-pointer"
                  >
                    Verify &amp; Get Contact Details
                  </button>
                </form>

                {/* Refund policy note */}
                <p className="text-zinc-700 text-[10px] font-mono text-center">
                  🛡️ 7-Day Full Refund Policy •{' '}
                  <Link href="/refund-policy" className="text-zinc-500 hover:text-[#a78bfa] underline transition-colors" onClick={handleClose}>
                    Learn more
                  </Link>
                </p>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-6 relative z-10 py-4"
              >
                <div className="mx-auto w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <CheckCircle className="w-8 h-8" />
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl font-black tracking-tight text-white uppercase">UTR Verified ✓</h3>
                  <p className="text-zinc-500 text-xs font-mono uppercase tracking-wider">UTR: {utr}</p>
                </div>

                <div className="p-4 rounded-xl border border-zinc-900 bg-zinc-950/80 text-zinc-300 text-xs leading-relaxed space-y-3">
                  <p className="font-semibold text-white">📸 Send your payment screenshot on WhatsApp to receive your Activation Key instantly.</p>
                  <p className="text-[#25D366] font-black font-mono text-lg">{whatsappNumber}</p>
                  <p className="text-zinc-500 text-[10px] uppercase font-mono">Share screenshot + UTR number on WhatsApp</p>
                </div>

                <div className="flex flex-col gap-2">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20b858] text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-200 shadow-[0_0_15px_rgba(37,211,102,0.2)]"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send on WhatsApp — Get Key</span>
                  </a>
                  <a
                    href="/api/download/paid"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#5B21B6] hover:shadow-[0_0_15px_rgba(124,58,237,0.3)] text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-200"
                  >
                    <span>Download VyronAI.exe — v1.2.4</span>
                  </a>
                  <button
                    onClick={handleClose}
                    className="w-full py-3 rounded-xl border border-zinc-800 hover:bg-white/5 text-zinc-400 hover:text-white transition-all text-xs font-bold uppercase tracking-wider cursor-pointer"
                  >
                    Done &amp; Close
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
