
import React, { useState, useMemo } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, CalendarIcon, ClockIcon } from './Icons';

// Mocked booked slots for demonstration
const MOCKED_BOOKED_SLOTS: { [key: string]: string[] } = {
  '2024-07-28': ['10:00', '14:00'],
  '2024-08-05': ['09:00', '11:00', '15:00'],
};


const Booking: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [bookedSlots, setBookedSlots] = useState(MOCKED_BOOKED_SLOTS);
  const [userName, setUserName] = useState('');
  const [userProfession, setUserProfession] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);

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
    if (day < new Date(new Date().toDateString())) return; // Disable past dates
    setSelectedDate(day);
    setSelectedTime(null);
    setIsConfirmed(false);
  };
  
  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setIsConfirmed(false);
  }

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime || !userName || !userProfession) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
    const dateKey = selectedDate.toISOString().split('T')[0];
    setBookedSlots(prev => ({
      ...prev,
      [dateKey]: [...(prev[dateKey] || []), selectedTime]
    }));
    setIsConfirmed(true);
    setUserName('');
    setUserProfession('');
  };
  
  const availableTimes = ['08:00', '09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00'];
  const dayBookedSlots = selectedDate ? bookedSlots[selectedDate.toISOString().split('T')[0]] || [] : [];

  return (
    <section id="agendamento" className="py-20 bg-[#F5F1ED]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#4A4A4A]">Agende sua Locação</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Selecione uma data e horário para reservar sua sala com facilidade e rapidez.
          </p>
        </div>
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Calendar */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <button onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))} className="p-2 rounded-full hover:bg-gray-100">
                  <ChevronLeftIcon />
                </button>
                <h3 className="text-xl font-semibold capitalize">{currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</h3>
                <button onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))} className="p-2 rounded-full hover:bg-gray-100">
                  <ChevronRightIcon />
                </button>
              </div>
              <div className="grid grid-cols-7 gap-1 text-center">
                {['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].map(d => <div key={d} className="font-semibold text-sm text-gray-500">{d}</div>)}
                {calendarDays.map((day, index) => (
                  <div key={index} className="p-1">
                    {day && (
                      <button
                        onClick={() => handleDateSelect(day)}
                        disabled={day < new Date(new Date().toDateString())}
                        className={`w-10 h-10 rounded-full transition-colors duration-200 
                          ${day < new Date(new Date().toDateString()) ? 'text-gray-300 cursor-not-allowed' : 'hover:bg-[#F5F1ED]'} 
                          ${selectedDate?.toDateString() === day.toDateString() ? 'bg-[#7A9E91] text-white' : 'text-gray-700'}`
                        }
                      >
                        {day.getDate()}
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
            {/* Time Slots & Form */}
            <div>
              {selectedDate && !isConfirmed && (
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center"><CalendarIcon className="mr-2"/> Selecione um horário para {selectedDate.toLocaleDateString('pt-BR')}</h3>
                  <div className="grid grid-cols-3 gap-2 mb-6">
                    {availableTimes.map(time => {
                      const isBooked = dayBookedSlots.includes(time);
                      return (
                        <button key={time} onClick={() => handleTimeSelect(time)} disabled={isBooked} className={`p-2 border rounded-md text-sm transition-colors duration-200 
                          ${isBooked ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'hover:bg-[#F5F1ED]'} 
                          ${selectedTime === time ? 'bg-[#7A9E91] text-white' : 'border-gray-300'}`}>
                          {time}
                        </button>
                      );
                    })}
                  </div>
                  {selectedTime && (
                    <form onSubmit={handleBookingSubmit}>
                      <h3 className="text-lg font-semibold mb-4"><ClockIcon className="inline mr-2"/> Preencha seus dados</h3>
                      <div className="space-y-4">
                         <input type="text" placeholder="Seu nome" value={userName} onChange={e => setUserName(e.target.value)} required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#7A9E91]"/>
                         <input type="text" placeholder="Sua profissão" value={userProfession} onChange={e => setUserProfession(e.target.value)} required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#7A9E91]"/>
                      </div>
                      <button type="submit" className="w-full bg-[#7A9E91] text-white py-3 rounded-md mt-6 font-semibold hover:bg-opacity-90 transition-colors">
                        Confirmar Agendamento
                      </button>
                    </form>
                  )}
                </div>
              )}
              {isConfirmed && selectedDate && selectedTime && (
                  <div className="text-center bg-green-50 p-6 rounded-lg">
                      <h3 className="text-xl font-bold text-green-800 mb-2">Agendamento Confirmado!</h3>
                      <p className="text-green-700">Sua sala está reservada para o dia <span className="font-semibold">{selectedDate.toLocaleDateString('pt-BR')}</span> às <span className="font-semibold">{selectedTime}</span>.</p>
                      <p className="mt-4 text-sm text-gray-600">Aguardamos você!</p>
                  </div>
              )}
              {!selectedDate && (
                  <div className="flex flex-col items-center justify-center h-full text-center text-gray-500">
                    <CalendarIcon className="w-16 h-16 mb-4 text-gray-300"/>
                    <p>Por favor, selecione uma data no calendário para ver os horários disponíveis.</p>
                  </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
