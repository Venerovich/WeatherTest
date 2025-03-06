export interface City {
  name: string
  id: number
  humidity: number
  icon: string
  temper: number
  speed: number
  condition: string
  weekWeather: WeekWeather[]
  hourWeather: HourWeather[]
}

export interface HourWeather {
  time: string
  dayPeriod: string
  temper: number | string
  icon: string
  speed: number
  humidity: number
  condition: string
}

export interface WeekWeather {
  name: string
  id: number
  icon: string
  temper: number
}
