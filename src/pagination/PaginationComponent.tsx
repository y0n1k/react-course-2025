import {useSearchParams} from "react-router-dom";

const PaginationComponent = () => {
    const [query, setQuery] = useSearchParams({skip: '0'})
    return (
        <div>
            <button onClick={() => {
                const skip = query.get('skip')
                if (skip) {
                    const currentPage = +skip;
                    setQuery({skip: (currentPage - 30).toString()})
            }}}
            >Назад
            </button>
            <button onClick={() => {
                const skip = query.get('skip')
                if (skip) {
                    const currentPage = +skip;
                    setQuery({skip: (currentPage + 30).toString()});
                }
            }}
            >Вперед
            </button>
        </div>
    );
};

export default PaginationComponent;