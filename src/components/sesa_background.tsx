import SesaIcon from './icons/sesalogoComb'
import SesaQxQ from './icons/SesaQquadrat';



export default function SesaBG(){
    return (
        <div className="fixed inset-0 pointer-events-none">
            <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-1 p-4">
                {/* Generate multiple logos in a grid */}
                {Array.from({ length: 12}).map((_, index) => (
                    <div key={index} className="relative opacity-[0.03]">
                        <div className="w-full aspect-square">
                            <SesaQxQ className="w-full h-full" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}