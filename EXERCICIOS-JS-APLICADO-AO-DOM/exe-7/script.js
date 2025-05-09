class Countdown {
  constructor(futureDate) {
    this.futureDate = futureDate;
  }

  get _actualDate() {
    return new Date();
  }

  get _futureDate() {
    return new Date(this.futureDate);
  }

  get _timeStampDiff() {
    return this._futureDate.getTime() - this._actualDate.getTime();
  }

  get days() {
    return Math.floor(this._timeStampDiff / (24 * 60 * 60 * 1000));
  }

  get hours() {
    return Math.floor(this._timeStampDiff / (60 * 60 * 1000));
  }

  get minutes() {
    return Math.floor(this._timeStampDiff / (60 * 1000));
  }

  get seconds() {
    return Math.floor(this._timeStampDiff / 1000);
  }

  get total() {
    const days = this.days;
    const hours = this.hours % 24;
    const minutes = this.minutes % 60;
    const seconds = this.seconds % 60;
    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }
}

const tempoParaOSaoJoao = new Countdown("24 June 2025 23:59:59 GMT-0300");
console.log(tempoParaOSaoJoao.total);

function rodarTempo() {
  //const transformJson = JSON.stringify(tempoParaOSaoJoao.total);
  //console.log(transformJson)
  const days = document.querySelector("#dias");
  const hours = document.querySelector("#horas");
  const minutes = document.querySelector("#minutos");
  const seconds = document.querySelector('#segundos');
  days.innerHTML = tempoParaOSaoJoao.total.days;
  hours.innerHTML = tempoParaOSaoJoao.total.hours;
  minutes.innerHTML = tempoParaOSaoJoao.total.minutes;
  seconds.innerHTML = tempoParaOSaoJoao.total.seconds;
}

setInterval(rodarTempo,1000);
