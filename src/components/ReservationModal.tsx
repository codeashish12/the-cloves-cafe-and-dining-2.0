import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, Users, User, Phone, CheckCircle, Sparkles, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'form' | 'confirmed'>('form');
  const [guests, setGuests] = useState<number>(2);
  const [date, setDate] = useState<string>('');
  const [time, setTime] = useState<string>('07:30 PM');
  const [occasion, setOccasion] = useState<string>('Casual Dining');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [notes, setNotes] = useState<string>('');

  const timeSlots = [
    '12:30 PM', '01:30 PM', '02:30 PM',
    '07:00 PM', '07:30 PM', '08:00 PM', '08:30 PM', '09:00 PM', '09:30 PM'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    // Trigger celebratory confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#C59A30', '#FDFBF7', '#8C5A4C']
    });

    setStep('confirmed');
  };

  const handleResetAndClose = () => {
    setStep('form');
    setName('');
    setPhone('');
    setNotes('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop Fade */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleResetAndClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 30 }}
          transition={{ type: 'spring', damping: 25, stiffness: 280 }}
          className="relative w-full max-w-xl bg-espresso-950 border border-gold-500/30 rounded-2xl shadow-2xl overflow-hidden z-10 my-auto"
        >
          {/* Close button */}
          <button
            onClick={handleResetAndClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full text-cream-300 hover:text-gold-400 bg-espresso-900 border border-gold-500/20"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="p-6 sm:p-8 bg-gradient-to-b from-espresso-900 to-espresso-950 border-b border-gold-500/20 text-center">
            <div className="w-12 h-12 rounded-full bg-gold-400/10 border border-gold-400/30 flex items-center justify-center text-gold-400 mx-auto mb-3">
              <Calendar className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-cream-100 uppercase">
              Reserve Your Table
            </h3>
            <p className="text-xs text-cream-300/80 mt-1 font-light">
              The Cloves Cafe & Dining • GT Road, PDDU Nagar
            </p>
          </div>

          {step === 'form' ? (
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
              
              {/* Guest Count */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gold-400 mb-2 flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>Number of Guests</span>
                </label>
                <div className="flex items-center gap-2 overflow-x-auto pb-2">
                  {[1, 2, 3, 4, 5, 6, 8, 10].map((num) => (
                    <button
                      type="button"
                      key={num}
                      onClick={() => setGuests(num)}
                      className={`px-4 py-2 rounded-lg text-xs font-bold transition-all border ${
                        guests === num
                          ? 'bg-gold-400 text-espresso-950 border-gold-400 shadow-md'
                          : 'bg-espresso-900 text-cream-200 border-gold-500/20 hover:border-gold-400/40'
                      }`}
                    >
                      {num} {num === 1 ? 'Guest' : 'Guests'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gold-400 mb-2 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Reservation Date</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-2.5 rounded-lg bg-espresso-900 border border-gold-500/20 text-cream-100 text-xs sm:text-sm focus:outline-none focus:border-gold-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gold-400 mb-2 flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>Preferred Time</span>
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg bg-espresso-900 border border-gold-500/20 text-cream-100 text-xs sm:text-sm focus:outline-none focus:border-gold-400"
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot} className="bg-espresso-950 text-cream-100">
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Occasion */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gold-400 mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  <span>Dining Type / Occasion</span>
                </label>
                <select
                  value={occasion}
                  onChange={(e) => setOccasion(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg bg-espresso-900 border border-gold-500/20 text-cream-100 text-xs sm:text-sm focus:outline-none focus:border-gold-400"
                >
                  <option value="Casual Dining">Casual Dining</option>
                  <option value="Family Dinner">Family Dinner</option>
                  <option value="Birthday Celebration">Birthday Celebration</option>
                  <option value="Anniversary / Date Night">Anniversary / Date Night</option>
                  <option value="Group / Treat">Group Treat</option>
                </select>
              </div>

              {/* Guest Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gold-400 mb-1.5 flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>Your Full Name *</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg bg-espresso-900 border border-gold-500/20 text-cream-100 text-xs sm:text-sm focus:outline-none focus:border-gold-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gold-400 mb-1.5 flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>Phone Number *</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 063890 61111"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg bg-espresso-900 border border-gold-500/20 text-cream-100 text-xs sm:text-sm focus:outline-none focus:border-gold-400"
                  />
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gold-400 mb-1.5 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  <span>Special Seating Requests (Optional)</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Quiet corner table, high chair for child..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg bg-espresso-900 border border-gold-500/20 text-cream-100 text-xs sm:text-sm focus:outline-none focus:border-gold-400"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 bg-gold-400 hover:bg-gold-300 text-espresso-950 font-bold uppercase text-xs tracking-widest rounded-lg transition-colors shadow-lg shadow-gold-500/20 flex items-center justify-center gap-2"
              >
                <span>Confirm Reservation Request</span>
              </button>

            </form>
          ) : (
            /* Confirmation Screen */
            <div className="p-8 text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-950 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto shadow-2xl animate-bounce">
                <CheckCircle className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold">
                  Reservation Received
                </span>
                <h4 className="font-serif text-3xl font-bold text-cream-100 mt-1">
                  Thank You, {name}!
                </h4>
                <p className="mt-3 text-sm text-cream-200/90 font-light leading-relaxed max-w-md mx-auto">
                  Your table for <strong className="text-gold-300 font-semibold">{guests} Guests</strong> on <strong className="text-gold-300 font-semibold">{date || 'Today'}</strong> at <strong className="text-gold-300 font-semibold">{time}</strong> has been requested.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-espresso-900 border border-gold-500/20 text-xs text-cream-300/80 text-left space-y-1 max-w-md mx-auto">
                <p>📍 <strong>Address:</strong> GT Rd, opposite Subhash Park, PDDU Nagar</p>
                <p>📞 <strong>Direct Contact:</strong> 063890 61111</p>
                <p>🎉 <strong>Occasion:</strong> {occasion}</p>
              </div>

              <button
                onClick={handleResetAndClose}
                className="px-8 py-3 bg-gold-400 text-espresso-950 font-bold text-xs uppercase tracking-widest rounded-lg transition-colors"
              >
                Back to Website
              </button>
            </div>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
