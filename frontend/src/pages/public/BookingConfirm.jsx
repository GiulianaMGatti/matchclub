function BookingConfirm() {
  return (
    <div className="max-w-2xl mx-auto text-center mt-16">
      <div className="bg-white rounded-xl shadow-md p-8">
        <h1 className="text-3xl font-bold text-green-600 mb-4">
          ¡Reserva confirmada!
        </h1>
        <p className="text-gray-600">
          Tu turno fue registrado correctamente. Más adelante acá vas a mostrar
          el detalle real de la reserva, el estado de pago y el recordatorio.
        </p>
      </div>
    </div>
  );
}

export default BookingConfirm;