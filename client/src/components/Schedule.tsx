import { Clock, Calendar } from 'lucide-react';

/**
 * Schedule Section - Modernismo Minimalista
 * Design: Tabela clara, ícones, layout limpo
 * Conteúdo: Horários de funcionamento
 */
export default function Schedule() {
  const schedules = [
    { day: 'Segunda a Sexta', morning: '05:45 - 11:00', afternoon: '14:00 - 21:30', badge: 'Completo' },
    { day: 'Sábado', morning: '07:00 - 10:00', afternoon: '-', badge: 'Manhã' },
    { day: 'Domingo', morning: 'Fechado', afternoon: '-', badge: 'Fechado' },
  ];

  return (
    <section id="horarios" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">Horários</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Quando nos visitá-lo
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
            Horários flexíveis para se adequar à sua rotina. Escolha o melhor momento para treinar.
          </p>
        </div>

        {/* Schedule Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {schedules.map((schedule, index) => (
            <div
              key={index}
              className="p-8 rounded-lg border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300 bg-white"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{schedule.day}</h3>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    schedule.badge === 'Completo'
                      ? 'bg-green-100 text-green-700'
                      : schedule.badge === 'Manhã'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {schedule.badge}
                </span>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Clock size={20} className="text-orange-500 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Manhã</p>
                    <p className="text-lg font-semibold text-gray-900">{schedule.morning}</p>
                  </div>
                </div>

                {schedule.afternoon !== '-' && (
                  <div className="flex items-center gap-3">
                    <Clock size={20} className="text-orange-500 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-500 font-medium">Tarde/Noite</p>
                      <p className="text-lg font-semibold text-gray-900">{schedule.afternoon}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Info Box */}
        <div className="bg-gradient-to-r from-orange-50 to-orange-100/50 border border-orange-200 rounded-lg p-8 md:p-12">
          <div className="flex items-start gap-4">
            <Calendar className="text-orange-500 flex-shrink-0 mt-1" size={28} />
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Aberto o Ano Todo</h3>
              <p className="text-gray-700 leading-relaxed">
                A Academia Atlética funciona durante todo o ano, com horários especiais em feriados.
                Consulte-nos para informações sobre datas específicas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
