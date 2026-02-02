
import React, { useState, useMemo } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, CalendarIcon, ClockIcon } from './Icons';

// Mocked booked slots for demonstration
const MOCKED_BOOKED_SLOTS: { [key: string]: string[] } = {
  '2024-07-28': ['10:00', '14:00'],
  '2024-08-05': ['09:00', '11:00', '15:00'],
};

type Step = 'date' | 'time' | 'info' | 'confirmed';

const Booking: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [bookedSlots, setBookedSlots] = useState(MOCKED_BOOKED_SLOTS);
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userProfession, setUserProfession] = useState('');
  const [currentStep, setCurrentStep] = useState<Step>('date');

  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

  const calendarDays = useMemo(() => {
    const days = [];
    const startingDay = firstDayOfMonth.getDay();
    for (let i = 0; i < startingDay; i++) {
      days.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(currentDate.getFullYear(), currentDate.getMonth(), i));
    }
    return days;
  }, [currentDate, firstDayOfMonth, daysInMonth]);

  const handleDateSelect = (day: Date) => {
    if (day < new Date(new Date().toDateString())) return;
    setSelectedDate(day);
    setSelectedTime(null);
    setCurrentStep('time');
  };
  
  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setCurrentStep('info');
  };

  const handleBackToDate = () => {
    setCurrentStep('date');
    setSelectedDate(null);
    setSelectedTime(null);
  };

  const handleBackToTime = () => {
    setCurrentStep('time');
    setSelectedTime(null);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime || !userName || !userPhone || !userProfession) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
    const dateKey = selectedDate.toISOString().split('T')[0];
    setBookedSlots(prev => ({
      ...prev,
      [dateKey]: [...(prev[dateKey] || []), selectedTime]
    }));
    setCurrentStep('confirmed');
  };

  const handleNewBooking = () => {
    setCurrentStep('date');
    setSelectedDate(null);
    setSelectedTime(null);
    setUserName('');
    setUserPhone('');
    setUserProfession('');
  };
  
  const availableTimes = ['08:00', '09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00'];
  const dayBookedSlots = selectedDate ? bookedSlots[selectedDate.toISOString().split('T')[0]] || [] : [];

  return (
    <section id="agendamento" className="py-24 bg-[#F7F3EF]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2D3436] mb-4">Agende sua Locação</h2>
          <p className="text-xl text-[#636E72] mt-4 max-w-2xl mx-auto leading-relaxed">
            Reserve sua sala em 3 passos simples e rápidos
          </p>
        </div>

        {/* Progress Steps */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center">
            <div className="flex items-center">
              <div className={`flex items-center justify-center w-12 h-12 rounded-full font-bold transition-all ${currentStep !== 'date' ? 'bg-[#5B8573] text-white' : 'bg-[#5B8573] text-white ring-4 ring-[#5B8573]/20'}`}>
                {currentStep === 'date' ? '1' : '✓'}
              </div>
              <span className={`ml-3 text-sm font-medium ${currentStep === 'date' ? 'text-[#2D3436]' : 'text-[#636E72]'}`}>Data</span>
            </div>
            <div className={`w-16 h-1 mx-4 transition-all ${currentStep === 'date' ? 'bg-gray-300' : 'bg-[#5B8573]'}`}></div>
            <div className="flex items-center">
              <div className={`flex items-center justify-center w-12 h-12 rounded-full font-bold transition-all ${currentStep === 'date' ? 'bg-gray-300 text-gray-500' : currentStep === 'time' ? 'bg-[#5B8573] text-white ring-4 ring-[#5B8573]/20' : 'bg-[#5B8573] text-white'}`}>
                {currentStep === 'date' ? '2' : currentStep === 'time' ? '2' : '✓'}
              </div>
              <span className={`ml-3 text-sm font-medium ${currentStep === 'time' ? 'text-[#2D3436]' : 'text-[#636E72]'}`}>Horário</span>
            </div>
            <div className={`w-16 h-1 mx-4 transition-all ${currentStep === 'date' || currentStep === 'time' ? 'bg-gray-300' : 'bg-[#5B8573]'}`}></div>
            <div className="flex items-center">
              <div className={`flex items-center justify-center w-12 h-12 rounded-full font-bold transition-all ${currentStep === 'info' || currentStep === 'confirmed' ? 'bg-[#5B8573] text-white ring-4 ring-[#5B8573]/20' : 'bg-gray-300 text-gray-500'}`}>
                {currentStep === 'confirmed' ? '✓' : '3'}
              </div>
              <span className={`ml-3 text-sm font-medium ${currentStep === 'info' || currentStep === 'confirmed' ? 'text-[#2D3436]' : 'text-[#636E72]'}`}>Seus Dados</span>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Step 1: Date Selection */}
          {currentStep === 'date' && (
            <div className="bg-white p-10 rounded-2xl shadow-xl">
              <div className="text-center mb-8">
                <CalendarIcon className="w-16 h-16 mx-auto mb-4 text-[#5B8573]" />
                <h3 className="text-2xl font-bold text-[#2D3436] mb-2">Escolha a Data</h3>
                <p className="text-[#636E72]">Selecione o dia que melhor se encaixa na sua agenda</p>
              </div>
              <div className="max-w-md mx-auto">
                <div className="flex items-center justify-between mb-6">
                  <button 
                    onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))} 
                    className="p-3 rounded-full hover:bg-[#F7F3EF] transition-colors"
                  >
                    <ChevronLeftIcon className="w-6 h-6 text-[#5B8573]" />
                  </button>
                  <h3 className="text-2xl font-bold text-[#2D3436] capitalize">
                    {currentDate.toLocaleString('pt-BR', { month: 'long', year: 'numeric' })}
                  </h3>
                  <button 
                    onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))} 
                    className="p-3 rounded-full hover:bg-[#F7F3EF] transition-colors"
                  >
                    <ChevronRightIcon className="w-6 h-6 text-[#5B8573]" />
                  </button>
                </div>
                <div className="grid grid-cols-7 gap-2">
                  {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map(d => (
                    <div key={d} className="text-center font-bold text-sm text-[#636E72] py-2">{d}</div>
                  ))}
                  {calendarDays.map((day, index) => (
                    <div key={index} className="flex justify-center items-center">
                      {day && (
                        <button
                          onClick={() => handleDateSelect(day)}
                          disabled={day < new Date(new Date().toDateString())}
                          className={`w-12 h-12 rounded-xl font-semibold transition-all duration-200
                            ${day < new Date(new Date().toDateString()) 
                              ? 'text-gray-300 cursor-not-allowed' 
                              : 'hover:bg-[#5B8573] hover:text-white hover:shadow-lg hover:scale-110'
                            } 
                            ${selectedDate?.toDateString() === day.toDateString() 
                              ? 'bg-[#5B8573] text-white shadow-lg scale-110' 
                              : 'text-[#2D3436] bg-[#F7F3EF]'
                            }`}
                        >
                          {day.getDate()}
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Time Selection */}
          {currentStep === 'time' && selectedDate && (
            <div className="bg-white p-10 rounded-2xl shadow-xl">
              <div className="text-center mb-8">
                <ClockIcon className="w-16 h-16 mx-auto mb-4 text-[#5B8573]" />
                <h3 className="text-2xl font-bold text-[#2D3436] mb-2">Escolha o Horário</h3>
                <p className="text-[#636E72]">
                  Data selecionada: <span className="font-semibold text-[#5B8573]">{selectedDate.toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</span>
                </p>
              </div>
              <div className="max-w-2xl mx-auto">
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 mb-8">
                  {availableTimes.map(time => {
                    const isBooked = dayBookedSlots.includes(time);
                    return (
                      <button 
                        key={time} 
                        onClick={() => !isBooked && handleTimeSelect(time)} 
                        disabled={isBooked} 
                        className={`p-4 rounded-xl text-base font-semibold transition-all duration-200 
                          ${isBooked 
                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed line-through' 
                            : 'bg-[#F7F3EF] text-[#2D3436] hover:bg-[#5B8573] hover:text-white hover:shadow-lg hover:scale-105'
                          }`}
                      >
                        {time}
                      </button>
                    );
                  })}
                </div>
                <button 
                  onClick={handleBackToDate}
                  className="w-full py-3 border-2 border-[#5B8573] text-[#5B8573] rounded-lg font-semibold hover:bg-[#F7F3EF] transition-all"
                >
                  ← Voltar e Escolher Outra Data
                </button>
              </div>
            </div>
          )}

          {/* Step 3: User Information */}
          {currentStep === 'info' && selectedDate && selectedTime && (
            <div className="bg-white p-10 rounded-2xl shadow-xl">
              <div className="text-center mb-8">
                <div className="w-16 h-16 mx-auto mb-4 bg-[#5B8573] rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#2D3436] mb-2">Últimos Detalhes</h3>
                <p className="text-[#636E72] mb-6">Complete suas informações para finalizar a reserva</p>
                <div className="inline-flex items-center gap-6 bg-[#F7F3EF] px-6 py-3 rounded-lg">
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="w-5 h-5 text-[#5B8573]" />
                    <span className="font-semibold text-[#2D3436]">{selectedDate.toLocaleDateString('pt-BR')}</span>
                  </div>
                  <div className="w-px h-6 bg-[#636E72]/20"></div>
                  <div className="flex items-center gap-2">
                    <ClockIcon className="w-5 h-5 text-[#5B8573]" />
                    <span className="font-semibold text-[#2D3436]">{selectedTime}</span>
                  </div>
                </div>
              </div>
              <form onSubmit={handleBookingSubmit} className="max-w-md mx-auto">
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-[#2D3436] mb-2">Nome Completo</label>
                    <input 
                      type="text" 
                      placeholder="Digite seu nome completo" 
                      value={userName} 
                      onChange={e => setUserName(e.target.value)} 
                      required 
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5B8573] focus:border-transparent transition-all text-[#2D3436] placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#2D3436] mb-2">WhatsApp</label>
                    <input 
                      type="tel" 
                      placeholder="(00) 00000-0000" 
                      value={userPhone} 
                      onChange={e => setUserPhone(e.target.value)} 
                      required 
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5B8573] focus:border-transparent transition-all text-[#2D3436] placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#2D3436] mb-2">Profissão / Especialidade</label>
                    <input 
                      type="text" 
                      placeholder="Ex: Esteticista, Psicólogo, etc." 
                      value={userProfession} 
                      onChange={e => setUserProfession(e.target.value)} 
                      required 
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5B8573] focus:border-transparent transition-all text-[#2D3436] placeholder:text-gray-400"
                    />
                  </div>
                </div>
                <div className="mt-8 space-y-3">
                  <button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-[#5B8573] to-[#4A6B5F] text-white py-4 rounded-xl font-bold text-lg hover:shadow-2xl transform hover:scale-[1.02] transition-all"
                  >
                    Confirmar Reserva
                  </button>
                  <button 
                    type="button"
                    onClick={handleBackToTime}
                    className="w-full py-3 border-2 border-gray-300 text-[#636E72] rounded-xl font-semibold hover:bg-[#F7F3EF] transition-all"
                  >
                    ← Voltar
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Step 4: Confirmation */}
          {currentStep === 'confirmed' && selectedDate && selectedTime && (
            <div className="bg-white p-10 rounded-2xl shadow-xl">
              <div className="text-center max-w-md mx-auto">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center animate-bounce">
                  <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-green-700 mb-3">Reserva Confirmada!</h3>
                <p className="text-lg text-[#636E72] mb-8">
                  Sua sala foi reservada com sucesso. Em breve entraremos em contato para confirmar os detalhes.
                </p>
                <div className="bg-[#F7F3EF] p-6 rounded-xl mb-8">
                  <div className="space-y-3 text-left">
                    <div className="flex items-center justify-between">
                      <span className="text-[#636E72]">Data:</span>
                      <span className="font-bold text-[#2D3436]">{selectedDate.toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' })}</span>
                    </div>
                    <div className="h-px bg-gray-200"></div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#636E72]">Horário:</span>
                      <span className="font-bold text-[#2D3436]">{selectedTime}</span>
                    </div>
                    <div className="h-px bg-gray-200"></div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#636E72]">Nome:</span>
                      <span className="font-bold text-[#2D3436]">{userName}</span>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={handleNewBooking}
                  className="w-full bg-[#5B8573] text-white py-4 rounded-xl font-bold hover:bg-[#4A6B5F] shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all"
                >
                  Fazer Nova Reserva
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Booking;
