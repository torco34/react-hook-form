import { useHookCourse } from "../../useContext/HooksAllProvider";
import { PrivateHeader } from "../layout/PrivateHeader";
import { PublicHeader } from "../layout/PublicHeader";
export const MainLayout = ({children}) => {
    const { contextAllHooks } = useHookCourse();
    const { isAuthenticated} = contextAllHooks;
  
    return (
      <div className="app">
        {isAuthenticated ? <PrivateHeader /> : <PublicHeader />}
        <main>{children}</main> 
      </div>
    );
  };