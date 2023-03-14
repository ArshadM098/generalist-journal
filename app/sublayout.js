import NavBar from "@/components/navBar"

export default function Layout({ children,title }) {
    return (
      <div className="flex flex-col">
        <div id="top_container" className="test h-32 grow-0">
        
        <div id="title_bar" className="test block text-5xl m-auto">{title}</div>
        <div id="hamburger"></div>

        </div>

          <div id="mid_container" className="test min-h-[700px] flex flex-row">

            <div id="main_content" className="test grow max-w-[1500px] mr-[500px]">{children[0]}</div>

            <NavBar id="navbar" className='test'></NavBar>

          </div>

          <div id="bottom_container" className='test h-32 grow-0'>{children[1]}</div>
      </div>
          
          
    )
  }