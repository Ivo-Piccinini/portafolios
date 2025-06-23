import React from 'react'
import criptomixImage from '../assets/criptomix_img.png'
import fgvImage from '../assets/fgv_img.png'
import cvPdf from '../assets/ivo-piccinini_CV.pdf' 

function Home() {  const skills = [
    {
      name: 'JavaScript',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
        </svg>
      )
    },
    {
      name: 'React',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.36-.034-.47 0-.92.014-1.36.034.44-.572.895-1.096 1.36-1.564zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.36.034.47 0 .92-.014 1.36-.034-.44.572-.895 1.095-1.36 1.563-.466-.468-.92-.99-1.36-1.563z"/>
        </svg>
      )
    },    {
      name: 'Django',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.146 0h3.924v18.166c-2.013.382-3.491.535-5.096.535-4.791 0-7.288-2.166-7.288-6.32 0-4.002 2.65-6.6 6.753-6.6.637 0 1.121.051 1.707.204V0zm0 9.143a3.894 3.894 0 00-1.325-.204c-1.988 0-3.134 1.223-3.134 3.364 0 2.09 1.096 3.236 3.109 3.236.433 0 .79-.025 1.35-.102V9.143zM21.314 6.06v9.098c0 3.134-.229 4.638-.917 5.937-.637 1.249-1.478 2.039-3.211 2.905l-3.644-1.733c1.733-.815 2.574-1.529 3.109-2.625.561-1.121.739-2.421.739-5.835V6.061h3.924zM17.39.021h3.924v4.026H17.39V.021z"/>
        </svg>
      )
    },
    {
      name: 'HTML5',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
        </svg>
      )
    },
    {
      name: 'CSS3',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/>
        </svg>
      )
    },
    {
      name: 'Git',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/>
        </svg>
      )
    },    {
      name: 'MySQL',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.15zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H.085c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 1.73.378 3.566.44 5.53zM9.294 18.695h-.927c-.022-1.564-.085-3.408-.193-5.53h.842l1.414 4.048h.009l1.411-4.048h.84c-.107 2.122-.17 3.966-.193 5.53h-.927c.055-1.564.123-3.14.207-4.723h-.008l-1.347 3.825h-.708l-1.335-3.825h-.008c.083 1.583.152 3.159.208 4.723zM17.78 18.695h-.927c-.022-1.564-.085-3.408-.193-5.53h.842l1.414 4.048h.009l1.411-4.048h.84c-.107 2.122-.17 3.966-.193 5.53h-.927c.055-1.564.123-3.14.207-4.723h-.008l-1.347 3.825h-.708l-1.335-3.825h-.008c.083 1.583.152 3.159.208 4.723zM24 18.695h-.927c-.022-1.564-.085-3.408-.193-5.53h.842l1.414 4.048h.009l1.411-4.048h.84c-.107 2.122-.17 3.966-.193 5.53h-.927c.055-1.564.123-3.14.207-4.723h-.008l-1.347 3.825h-.708l-1.335-3.825h-.008c.083 1.583.152 3.159.208 4.723z"/>
        </svg>
      )
    },    {
      name: 'Python',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/>
        </svg>
      )
    },
    {
      name: 'TypeScript',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
        </svg>
      )
    },
    {
      name: 'Tailwind CSS',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
        </svg>
      )
    },
    {
      name: 'Vite',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="m8.286 10.578.512-8.657a.306.306 0 0 1 .247-.282L17.377.006a.306.306 0 0 1 .353.385l-1.558 5.403a.306.306 0 0 0 .352.385l2.388-.46a.306.306 0 0 1 .332.438l-6.79 13.55-.123.19a.294.294 0 0 1-.252.14c-.177 0-.35-.152-.305-.369l1.095-5.301a.306.306 0 0 0-.388-.355L8.552 14.48a.306.306 0 0 1-.266-.529l-.002-.001z"/>
        </svg>
      )
    },    {
      name: 'Next.js',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 01-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 00-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 00-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 01-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 01-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 01.174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 004.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 002.466-2.163 11.944 11.944 0 002.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 00-2.499-.523A33.119 33.119 0 0011.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 01.237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 01.233-.296c.096-.05.13-.054.5-.054z"/>
        </svg>
      )
    },    {
      name: 'RESTful APIs',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.5 2c-5.621 0-10.211 4.443-10.475 10h-3.025l5 6.625 5-6.625h-2.975c.257-3.351 3.06-6 6.475-6 3.584 0 6.5 2.916 6.5 6.5s-2.916 6.5-6.5 6.5c-1.863 0-3.542-.793-4.728-2.053l-2.427 3.216c1.877 1.754 4.389 2.837 7.155 2.837 5.79 0 10.5-4.71 10.5-10.5s-4.71-10.5-10.5-10.5z"/>
        </svg>
      )
    },    {
      name: 'n8n',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.31 3.38h.62c3.38 0 6.12 2.74 6.12 6.12v.31c0 .86-.7 1.56-1.56 1.56s-1.56-.7-1.56-1.56v-.31c0-1.72-1.4-3.12-3.12-3.12h-.62c-.86 0-1.56-.7-1.56-1.56s.7-1.56 1.56-1.56zm.31 17.24h-.62c-3.38 0-6.12-2.74-6.12-6.12v-.31c0-.86.7-1.56 1.56-1.56s1.56.7 1.56 1.56v.31c0 1.72 1.4 3.12 3.12 3.12h.62c.86 0 1.56.7 1.56 1.56s-.7 1.56-1.56 1.56z"/>
        </svg>
      )
    }
  ];
  
    const experiences = [
    {
      company: "Criptomix",
      position: "Desarrollador Fullstack",
      period: "Mayo 2024 - Presente",
      description: "Desarrollo, optimización y mantenimiento de la plataforma de comercio electrónico Criptomix, enfocándome en la integración de pagos y la experiencia del usuario.",
      projectImage: criptomixImage,
      projectName: "Criptomix"
    },    
    {
      company: "FGV",
      position: "Desarrollador Fullstack",
      period: "Feb 2025 - Presente",
      description: "Desarrollo, optimización y mantenimiento del website del estudio fotográfico FGV, enfocándome en el registro de turnos y la visibilización de la marca.",
      projectImage: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%2310b981'/%3E%3Ctext x='150' y='105' font-family='Arial, sans-serif' font-size='16' fill='white' text-anchor='middle'%3EApp Mobile%3C/text%3E%3C/svg%3E",
      projectName: "FGV"
    },
    {
      company: "Freelance",
      position: "Desarrollador Web",
      period: "2023 - Presente",
      description: "Desarrollo de sitios web personalizados para pequeñas empresas, enfoque en diseño responsive y experiencia de usuario.",
      projectImage: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23f59e0b'/%3E%3Ctext x='150' y='105' font-family='Arial, sans-serif' font-size='16' fill='white' text-anchor='middle'%3EWeb Corporativa%3C/text%3E%3C/svg%3E",
      projectName: "Web Corporativa"
    },
    {
      company: "Freelance",
      position: "Desarrollador de automatizaciones con IA",
      period: "2024 - Presente",
      description: "Desarrollo de automatizaciones personalizadas utilizando n8n, integrando diversas APIs y servicios para optimizar flujos de trabajo.",
      projectImage: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23f59e0b'/%3E%3Ctext x='150' y='105' font-family='Arial, sans-serif' font-size='16' fill='white' text-anchor='middle'%3EWeb Corporativa%3C/text%3E%3C/svg%3E",
      projectName: "Web Corporativa"
    },
  ];

  const projects = [
    {
      title: "Administrador financiero",
      description: "Aplicación web para gestionar finanzas personales, con funcionalidades de seguimiento de gastos y funcionalidades CRUD.",
      technologies: ["React", "Javascript", "Vite"],
      github: "https://github.com/Ivo-Piccinini/Vite-Money-Manager",
      demo: "https://vite-money-manager.netlify.app/"
    },
    {
      title: "Administrador de Veterinaria",
      description: "Aplicación de gestión de veterinaria, con funcionalidades de gestión de pacientes, dueños y citas.",
      technologies: ["React", "Javascript", "Vite"],
      github: "https://github.com/Ivo-Piccinini/Vet-Vite",
      demo: "https://vet-vite.netlify.app/"
    },
    {
      title: "Todo List",
      description: "Gestor de tareas simple y efectivo, con funcionalidades de agregar, eliminar y marcar tareas como completadas.",
      technologies: ["React", "Javascript", "Vite"],
      github: "https://github.com/Ivo-Piccinini/todo-machine",
      demo: "https://todo-machine-react.netlify.app/"
    }
  ];

  return (    
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-purple-900 to-violet-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            Ivo Piccinini
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8 opacity-90 animate-fade-in-up animation-delay-200">
            Desarrollador Frontend
          </p>
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed opacity-90 animate-fade-in-up animation-delay-400">
            Desarrollador apasionado por crear experiencias web modernas y funcionales. 
            Especializado en React y tecnologías frontend, con enfoque en código limpio y 
            diseño responsive que brinde la mejor experiencia de usuario.
          </p>            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-600">            <a 
              href={cvPdf} 
              download="Ivo_Piccinini_CV.pdf"
              className="bg-violet-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-violet-700 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg flex items-center justify-center gap-3"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Descargar CV
            </a>
            <a 
              href="https://github.com/Ivo-Piccinini" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="border-2 border-violet-400 text-violet-300 px-8 py-3 rounded-lg font-semibold hover:bg-violet-600 hover:text-white transition-all duration-300 hover:transform hover:-translate-y-1 flex items-center justify-center gap-3"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
              </svg>
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/ivo-piccinini-7423a324b/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="border-2 border-violet-400 text-violet-300 px-8 py-3 rounded-lg font-semibold hover:bg-violet-600 hover:text-white transition-all duration-300 hover:transform hover:-translate-y-1 flex items-center justify-center gap-3"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </section>      
      {/* Experience Section */}
      <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            Experiencia Laboral
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">            {experiences.map((exp, index) => (
              <div key={index} className="group h-80" style={{perspective: '1000px'}}>                <div 
                  className="relative w-full h-full transition-transform duration-700 group-hover:rotate-y-180"
                  style={{
                    transformStyle: 'preserve-3d'
                  }}
                >                  
                {/* Frente de la tarjeta */}
                  <div 
                    className="absolute inset-0 w-full h-full bg-gray-800 p-8 rounded-2xl shadow-lg border-l-4 border-violet-500"
                    style={{backfaceVisibility: 'hidden'}}
                  >
                    <h3 className="text-xl font-bold text-white mb-2">
                      {exp.position}
                    </h3>
                    <h4 className="text-lg font-semibold text-violet-400 mb-2">
                      {exp.company}
                    </h4>
                    <p className="text-sm text-gray-400 mb-4 font-medium">
                      {exp.period}
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="absolute bottom-4 right-4 text-gray-500 text-sm">
                      Hover para ver proyecto
                    </div>
                  </div>                  
                  {/* Reverso de la tarjeta */}                  <div 
                    className={`absolute inset-0 w-full h-full p-6 rounded-2xl shadow-lg flex flex-col items-center justify-center text-white ${
                      index === 0 
                        ? 'bg-gradient-to-br from-violet-600 to-purple-800' 
                        : 'bg-gradient-to-br from-gray-600 to-gray-800'
                    }`}
                    style={{
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)'
                    }}
                  >                    
                  {index === 1 ? (
                      // Segunda tarjeta - Próximamente sin imagen
                      <div className="flex flex-col items-center justify-center h-full text-center">
                        <div className="w-20 h-20 mb-6 rounded-full bg-gray-500 flex items-center justify-center">
                          <svg className="w-10 h-10 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-2 text-gray-200">
                          Próximamente
                        </h3>
                        <p className="text-sm text-gray-400 opacity-90">
                          Proyecto en desarrollo
                        </p>
                      </div>                    ) : index === 2 ? (
                      // Tercera tarjeta - Próximamente sin imagen
                      <div className="flex flex-col items-center justify-center h-full text-center">
                        <div className="w-20 h-20 mb-6 rounded-full bg-gray-500 flex items-center justify-center">
                          <svg className="w-10 h-10 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-2 text-gray-200">
                          Próximamente
                        </h3>
                        <p className="text-sm text-gray-400 opacity-90">
                          Proyecto en desarrollo
                        </p>
                      </div>
                    ) : index === 3 ? (
                      // Cuarta tarjeta - Próximamente sin imagen
                      <div className="flex flex-col items-center justify-center h-full text-center">
                        <div className="w-20 h-20 mb-6 rounded-full bg-gray-500 flex items-center justify-center">
                          <svg className="w-10 h-10 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-2 text-gray-200">
                          Próximamente
                        </h3>
                        <p className="text-sm text-gray-400 opacity-90">
                          Proyecto en desarrollo
                        </p>
                      </div>                    
                    ) : index === 0 ? (
                      // Primera tarjeta - Criptomix con contenido normal
                      <>
                        <div 
                          className="w-full h-40 mb-4 rounded-lg overflow-hidden cursor-pointer"
                          onClick={() => window.open("https://criptomix.com/", '_blank')}
                        >
                          <img 
                            src={criptomixImage || '/criptomix_img.png'} 
                            alt="Criptomix"
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-center">
                          {exp.projectName}
                        </h3>
                        <p className="text-sm text-center opacity-90">
                          Proyecto realizado en {exp.company}
                        </p>
                      </>
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>      
      {/* Projects Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            Proyectos Personales
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (              <div 
                key={index} 
                className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 border border-gray-700"
              >
                <h3 className="text-xl font-bold text-white mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="bg-violet-600 text-white px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-violet-400 font-semibold hover:text-violet-300 transition-colors duration-300"
                  >
                    GitHub
                  </a>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-violet-400 font-semibold hover:text-violet-300 transition-colors duration-300"
                  >
                    Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>      {/* Skills Section */}
      <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            Habilidades
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Habilidades Técnicas */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-violet-400">
                Técnicas
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div 
                    key={index} 
                    className="bg-gray-700 hover:bg-violet-600 hover:text-white text-gray-300 px-4 py-3 rounded-lg text-center font-semibold transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg cursor-default flex items-center justify-center gap-3"
                  >
                    {skill.icon}
                    <span className="text-sm">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Habilidades Blandas */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-violet-400">
                Blandas
              </h3>              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    name: 'Trabajo en Equipo',
                    icon: (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM10 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM18 10.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zM12 10.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zM6 10.5c.83 0 1.5-.67 1.5-1.5S6.83 7.5 6 7.5 4.5 8.17 4.5 9s.67 1.5 1.5 1.5zM12 19l2-8h3l-2 8h-3zM9 11l-2 8h3l2-8H9z"/>
                      </svg>
                    )
                  },
                  {
                    name: 'Comunicación',
                    icon: (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
                      </svg>
                    )
                  },
                  {
                    name: 'Resolución de Problemas',
                    icon: (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    )
                  },
                  {
                    name: 'Adaptabilidad',
                    icon: (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    )
                  },
                  {
                    name: 'Liderazgo',
                    icon: (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    )
                  },
                  {
                    name: 'Pensamiento Crítico',
                    icon: (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2.5-5H20v2h-0.5l-1 12H5.5l-1-12H4V6h2.5l1.5-2h6L15.5 6zM10 4l-0.5 1h5L14 4h-4z"/>
                      </svg>
                    )
                  },
                  {
                    name: 'Creatividad',
                    icon: (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 11c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1zm4 0c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1zm4 0c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1zm-4-8.5c-3.31 0-6 2.69-6 6 0 1.66.67 3.16 1.76 4.24l-.71.71C7.05 12.45 6 10.32 6 8c0-3.87 3.13-7 7-7s7 3.13 7 7c0 2.32-1.05 4.45-2.76 5.95l-.71-.71C17.33 11.16 18 9.66 18 8c0-3.31-2.69-6-6-6z"/>
                      </svg>
                    )
                  },                  {
                    name: 'Gestión del Tiempo',
                    icon: (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                      </svg>
                    )
                  },
                  {
                    name: 'Automatizaciones con IA',
                    icon: (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l-5.5 9h11L12 2zm0 3.84L14.93 9H9.07L12 5.84zM17.5 13c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5zm0 5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM3 21.5h8v-8H3v8zM5 15.5h4v4H5v-4z"/>
                      </svg>
                    )
                  }
                ].map((skill, index) => (
                  <div 
                    key={index} 
                    className="bg-gray-700 hover:bg-purple-600 hover:text-white text-gray-300 px-4 py-3 rounded-lg text-center font-semibold transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg cursor-default flex items-center justify-center gap-3"
                  >
                    {skill.icon}
                    <span className="text-sm">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>{/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="max-w-4xl mx-auto px-6 text-center">          <p className="text-gray-400">
            © 2025 Ivo Piccinini. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Home