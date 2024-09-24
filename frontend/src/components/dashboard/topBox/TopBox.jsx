import { topDealUsers } from "../../../data/data";

const TopBox = () => {
  return (
    <div>
      <h1 className="mb-5">Top Deals</h1>
      <div>
        {topDealUsers.map((user) => (
          <div
            className="flex items-center justify-between mb-[30px]"
            key={user.id}
          >
            <div className="flex gap-5">
              <img
                src={user.img}
                alt=""
                className="w-10 h-10 rounded-[50%] object-cover"
              />
              <div className="flex flex-col gap-1">
                <span className="text-[14px] font-medium">{user.username}</span>
                <span className="text-[12px]">{user.email}</span>
              </div>
            </div>
            <span className="font-medium">${user.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBox;
