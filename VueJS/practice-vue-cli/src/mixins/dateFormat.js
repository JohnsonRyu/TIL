export const dateFormat = {
  methods: {
    getDateAndTime(date) {
      if(date !== null) {
        const hour = date.getHours();
        const minutes = date.getMinutes();
        const fullDate = `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}`;

        return `${fullDate} ${hour}:${minutes}`
      }
    }
  }
}