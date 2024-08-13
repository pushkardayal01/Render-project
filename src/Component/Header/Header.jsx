import style from "./Header.module.css";
function Header(){
  return (
    <div className={style.box}>
      <ul className={style.unorderedlist}>
        <li className={style.listitem}><button>Home</button></li>
        <li className={style.listitem}><button>Calculator</button></li>
        <li className={style.listitem}><button>Simple Interest Calculator</button></li>
        <li className={style.listitem}><button>Contact</button></li>
      </ul>
    </div>
  )
}

export default Header;