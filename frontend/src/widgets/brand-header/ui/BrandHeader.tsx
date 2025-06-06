import { FC } from 'react';
import { useSingleBrand } from '../../../features/brands';
import { useParams } from 'react-router-dom';
import { EBHSkeleton, EntBrandHeader } from '../../../entites/brand-header';

export const BrandHeader: FC = () => {
  const params = useParams<{ id: string }>();

  const { data, isError, isLoading } = useSingleBrand(params.id!);

  return (
    <>
      {data && !isError && !isLoading ? (
        <EntBrandHeader
          imageUrl={data.imageUrl!}
          name={data.name}
          description={data.description!}
        />
      ) : (
        <EBHSkeleton />
      )}
    </>
  );
};
