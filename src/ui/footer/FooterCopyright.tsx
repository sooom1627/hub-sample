export function FooterCopyright() {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="pt-6 border-t border-gray-200">
      <div className="text-center">
        <p className="text-sm text-gray-500">
          &copy; {currentYear} 三越伊勢丹. All rights reserved.
        </p>
      </div>
    </div>
  );
}