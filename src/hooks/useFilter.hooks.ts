import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function useSearch() {
    const location = useLocation();
    const navigate = useNavigate();

    const searchParams = useMemo(() => {
        const params = new URLSearchParams(location.search);
        const result: Record<string, string> = {};
        params.forEach((value, key) => {
            result[key] = value;
        });
        return result;
    }, [location.search]);


    const setSearchParams = (newParams: Record<string, string | null>) => {
        const params = new URLSearchParams(location.search);

        Object.entries(newParams).forEach(([key, value]) => {
            if (value === null || value === undefined) {
                params.delete(key);
            } else {
                params.set(key, value);
            }
        });

        navigate({ search: params.toString() }, { replace: true });
    };

    return { searchParams, setSearchParams };
}

export default useSearch;
