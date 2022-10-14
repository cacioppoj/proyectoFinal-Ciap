

getData = async()=> {
    const URL = 'https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary';
    const options = {
        params: {
          bl_latitude: '27.847676',
          bl_longitude: '96.473209',
          tr_longitude: '130.149359',
          tr_latitude: '18.838442',
          limit: '30',
          currency: 'USD',
        },
        headers: {
          'X-RapidAPI-Key': '3149835cafmsh2a04639bc2ffd55p152938jsna9deae1c69fd',
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        }
      }

    try {
        const { data:{data} } = await axios.get(URL, options)
        return data
        
    } catch (error) {
        console.log(error)
        
    }
}