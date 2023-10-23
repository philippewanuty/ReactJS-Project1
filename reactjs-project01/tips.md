<h1>Commands used</h1>

<h2>Create project</h2>

<p>
    npm create vite@latest => for create project chose React and JS <br>
    npm run dev  => for run aplication <br>
    npm i => for install dependences <br>
  
</p>

<h2>Libraries</h2>

<p>
   
    npm i date-fns => for use date
</p>

<h2>Creating components</h2>
<code>
    
    export function Exemple() {
      return (
        <div>
          <div>Content</div>
        </div>
      )
    }
</code>
<p>using..</p>
<code>
    
    import { Exemple } from "./Exemple"
    .
    .
    export function page() {
      return(
        <div>
          <Exemple/>
        <div/>
      )
    }
</code>

<p><b>Obs:</b> Aways needs a div inside the function</p>


<p> Especial tips:</p>

<p>remove all focus putting this code in global css</p>

<code>

    :focus {
    outline: transparent;

    box-shadow: 0 0 0 2px var(--green-500);}
  
</code>

