export default function Contents({listName}){
    if (listName === 'one') {
      return (
        <div>one Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat voluptatem sint magnam quam quo quis sed aliquam natus odio dolor voluptatibus quaerat cupiditate eos architecto ipsam provident repellat, nam doloremque?</div>
      )
    } else if (listName === 'two') {
      return (
        <div>two Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat voluptatem sint magnam quam quo quis sed aliquam natus odio dolor voluptatibus quaerat cupiditate eos architecto ipsam provident repellat, nam doloremque?</div>
      )
    } else if (listName === 'three') {
      return (
        <div>three Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat voluptatem sint magnam quam quo quis sed aliquam natus odio dolor voluptatibus quaerat cupiditate eos architecto ipsam provident repellat, nam doloremque?</div>
      )
    } else if (listName === 'four') {
      return (
        <div>four Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat voluptatem sint magnam quam quo quis sed aliquam natus odio dolor voluptatibus quaerat cupiditate eos architecto ipsam provident repellat, nam doloremque?</div>
      )
    }
    else if (listName === 'five') {
        return (
          <div>five Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat voluptatem sint magnam quam quo quis sed aliquam natus odio dolor voluptatibus quaerat cupiditate eos architecto ipsam provident repellat, nam doloremque?</div>
        )
      }
    return (
      <div>404 페이지를 찾을 수 없습니다.</div>
    )
  }