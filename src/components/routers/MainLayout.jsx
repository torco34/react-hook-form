import { useHookCourse } from "../../useContext/HooksAllProvider";
import { PrivateHeader } from "../layout/PrivateHeader";
import { PublicHeader } from "../layout/PublicHeader";
PrivateHeader
export const MainLayout = ({children}) => {
    const { contextAllHooks } = useHookCourse();
    const { isAuthenticated} = contextAllHooks;
  
    return (
      <div >
        {isAuthenticated ? <PrivateHeader /> : <PublicHeader />}
        <main >{children}</main> 
      </div>
    );
  };