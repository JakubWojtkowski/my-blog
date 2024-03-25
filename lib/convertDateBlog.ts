export function convertDateBlog(blogDate: Date) {
    const date = new Date(blogDate);

    const months = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    const monthIndex = date.getMonth();
    const day = date.getDate();
    const year = date.getFullYear();

    const formattedDate = `${months[monthIndex]} ${day}, ${year}`;
    return formattedDate;
}
