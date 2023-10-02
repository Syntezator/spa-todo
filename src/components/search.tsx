import { FC, useState } from 'react';
import { TaskModal } from './modals/taskModal';
import searchImg from '..\assets\img\search.svg'


interface SearchProps {
  openModal: () => void;
  setModalContent: React.Dispatch<React.SetStateAction<React.ReactNode | null>>;
}

export const Search: FC<SearchProps> = ({}) => {
  const [results, setResults] = useState([])

  

  return (
    <div>
        <div className='form'>
          <form>
            <input type='text' placeholder='search' className='searchInput'/>
            <img src={searchImg} className='searchImg'/>
          </form>
        </div>
        <div className='searchResults'>
            {/* {
              results.map(() => {
                return 
              })
            } */}
        </div>
    </div>
  );
};
