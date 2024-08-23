const useIntl = () => {
    const formatter = new Intl.NumberFormat('pl-PL', { useGrouping: true })

    return { formatter }
}
export default useIntl;
