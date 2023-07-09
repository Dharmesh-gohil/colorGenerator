import { toast } from "react-toastify"

const SingleColor = ({ index, color }) => {
    // console.log(color)
    const {weight, hex}=color

    const saveToClipboard = async () => { 
        if (navigator.clipboard) {
            try {
                await navigator.clipboard.writeText(`#${hex}`)
                toast.success("successfully color copied  to clipboard")
                
            } catch (error) {
                toast.error("failed to  copy color to clipboard")
            }

        } else { 
            toast.error("clipboard not available in browser setting so do change init")
        }
    }

  return (
      <article className={index > 10 ? "color color-light" : "color"}
          style={{ background: `#${hex}` }}
      onClick={saveToClipboard}>
      
          <p className="percent-value">{weight}%</p>
          <p className="color-value">#{ hex}</p>
      </article>
  )
}
export default SingleColor
